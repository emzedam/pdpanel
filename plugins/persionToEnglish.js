export default {
    install: (app , options) => {
        app.config.globalProperties.$persianToEnglish = (FaText) => {
            const persianToEnglish = {
                'آ': 'a',
                'ا': 'a',
                'ب': 'b',
                'پ': 'p',
                'ت': 't',
                'ث': 's',
                'ج': 'j',
                'چ': 'ch',
                'ح': 'h',
                'خ': 'kh',
                'د': 'd',
                'ذ': 'z',
                'ر': 'r',
                'ز': 'z',
                'ژ': 'zh',
                'س': 's',
                'ش': 'sh',
                'ص': 's',
                'ض': 'z',
                'ط': 't',
                'ظ': 'z',
                'ع': 'a',
                'غ': 'gh',
                'ف': 'f',
                'ق': 'q',
                'ک': 'k',
                'گ': 'g',
                'ل': 'l',
                'م': 'm',
                'ن': 'n',
                'و': 'u',
                'ه': 'h',
                'ی': 'y'
            };

            const persianText = FaText;
            const englishText = persianText.split('').map(char => persianToEnglish[char] || char).join('');
            return englishText
        }
    }
}