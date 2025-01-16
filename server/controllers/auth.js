const AuthSchema = require("../models/auth.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Geçerli bir e-posta kontrolü
        if (!isValidEmail(email)) {
            return res.status(400).json({ msg: "Lütfen geçerli bir email adresi giriniz" });
        }


        // Kullanıcı zaten mevcut mu?
        const user = await AuthSchema.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "Bu kullanıcı zaten var" });
        }

        // Şifre uzunluğu kontrolü
        if (typeof password !== 'string') {
            return res.status(400).json({ msg: "Şifre geçerli bir metin olmalıdır." });
        }

        const trimmedPassword = password.trim(); // Boşlukları temizle
        console.log(trimmedPassword.length); // Şifre uzunluğunu kontrol et

        if (trimmedPassword.length < 6) {
            return res.status(400).json({ msg: "Şifre 6 karakterden küçük olamaz" });
        }

        // Şifreyi hash'leme
        const passwordHash = await bcrypt.hash(trimmedPassword, 12);

        // Yeni kullanıcı oluşturma
        const newUser = await AuthSchema.create({ username, email, password: passwordHash });

        // JWT oluşturma
        const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", { expiresIn: "1h" });

        res.status(201).json({
            status: "OK",
            newUser,
            token
        });
    } catch (error) {
        console.error("Register Error:", error); // Detaylı hata mesajı
        return res.status(500).json({ msg: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kullanıcıyı e-posta ile sorgulama
        const user = await AuthSchema.findOne({ email });  // Eşleşen e-posta adresini bul
        if (!user) {
            return res.status(400).json({ msg: "Böyle bir kullanıcı bulunamadı!" });
        }

        // Şifreyi doğrulama
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ msg: "Şifre hatalı" });
        }

        // JWT oluşturma
        const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });

        res.status(200).json({
            status: "OK",
            user,
            token
        });
    } catch (error) {
        console.error("Login Error:", error);  // Detaylı hata mesajı
        return res.status(500).json({ msg: error.message });
    }
}

function isValidEmail(email) {
    // E-posta değerinin string olduğundan emin olun
    email = String(email);

    // Geçerli bir e-posta formatı
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

module.exports = { register, login };
