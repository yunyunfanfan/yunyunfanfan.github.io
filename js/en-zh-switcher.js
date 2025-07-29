// English-Chinese Language Switcher for Butterfly Theme
(function() {
    'use strict';
    
    // English translations
    const englishTranslations = {
        // Navigation
        '首页': 'Home',
        '归档': 'Archives',
        '标签': 'Tags',
        '分类': 'Categories',
        '图库': 'Gallery',
        'Examples': 'Examples',
        '说说': 'Moments',
        'Get Started': 'Get Started',
        '主题配置': 'Theme Config',
        'Tag Plugins': 'Tag Plugins',
        'Q&A': 'Q&A',
        '留言板': 'Message Board',
        '友情链接': 'Friend Links',
        '音乐': 'Music',
        
        // Common
        '全部文章': 'All Articles',
        '条评论': 'comments',
        '无标题': 'Untitled',
        '发表于': 'Created',
        '更新于': 'Updated',
        '总字数': 'Word Count',
        '阅读时长': 'Reading Time',
        '分钟': 'mins',
        '浏览量': 'Post Views',
        '评论数': 'Comments',
        '文章作者': 'Author',
        '文章链接': 'Link',
        '版权声明': 'Copyright Notice',
        '相关推荐': 'Related Articles',
        '编辑': 'Edit',
        '返回首页': 'Back to Home',
        
        // Search
        '搜索': 'Search',
        '数据加载中': 'Loading Database',
        '搜索文章': 'Search for Posts',
        '未找到符合您查询的内容：': 'No results found for: ',
        '找到': 'found',
        '条结果，耗时': 'results in',
        '毫秒': 'ms',
        '共找到': 'found',
        '篇文章': 'articles',
        
        // Pagination
        '上一篇': 'Previous',
        '下一篇': 'Next',
        
        // Comments
        '评论': 'Comments',
        
        // Aside
        '文章': 'Articles',
        '标签': 'Tags',
        '分类': 'Categories',
        '公告': 'Announcement',
        '最新文章': 'Recent Posts',
        '网站信息': 'Website Info',
        '文章数目': 'Article Count',
        '运行时间': 'Runtime',
        '天': 'days',
        '最后更新时间': 'Last Update',
        '本站总字数': 'Total Word Count',
        '本站访客数': 'Unique Visitors',
        '本站总浏览量': 'Page Views',
        '查看更多': 'View More',
        '最新评论': 'Latest Comments',
        '加载中...': 'Loading...',
        '无法获取评论，请确认相关配置是否正确': 'Unable to retrieve comments, please check the configuration',
        '暂无评论': 'No comments',
        '图片': 'Image',
        '链接': 'Link',
        '代码': 'Code',
        '目录': 'Contents',
        '系列文章': 'Post Series',
        
        // Date suffixes
        '刚刚': 'Just now',
        '分钟前': 'minutes ago',
        '小时前': 'hours ago',
        '天前': 'days ago',
        '个月前': 'months ago',
        
        // Other
        '赞助': 'Sponsor',
        '分享': 'Share',
        '阅读模式': 'Reading Mode',
        '简繁转换': 'Language Switch',
        '日间和夜间模式切换': 'Toggle Between Light and Dark Mode',
        '返回顶部': 'Back to Top',
        
        // Site specific
        '追云之帆': 'Chasing Cloud Sails',
        'We are the best!': 'We are the best!',
        'Personal blog of 云帆 from Lanzhou University': 'Personal blog of Yunfan from Lanzhou University',
        '欢迎来到追云之帆': 'Welcome to Chasing Cloud Sails',
        '你好！我是': 'Hi! I\'m',
        '云帆': 'Yunfan',
        '目前在兰州大学就读': 'a student at Lanzhou University',
        '兰州大学学生云帆的个人博客，分享技术学习心得和生活感悟': 'Personal blog of Yunfan, a student at Lanzhou University, sharing technical learning insights and life reflections',
        '如果您想和我交换友链，可以使用以下信息': 'If you want to exchange friend links with me, you can use the following information',
        '网站名称': 'Website Name',
        '网站地址': 'Website URL',
        '网站描述': 'Website Description',
        '欢迎来到追云之帆文档中心！这里提供了详细的使用指南和配置说明': 'Welcome to Chasing Cloud Sails Documentation Center! Here you\'ll find detailed guides and configuration instructions',
        '文档中心': 'Documentation Center',
        '欢迎体验全新升级的 Butterfly 主题！本文将全面展示主题的各种精美功能和特色': 'Welcome to experience the newly upgraded Butterfly theme! This article will comprehensively showcase the various beautiful features and characteristics of the theme',
        'Butterfly 主题功能完整展示': 'Complete Display of Butterfly Theme Features',
        '页面功能': 'Page Features',
        '核心页面': 'Core Pages',
        '我们的博客现在包含了完整的页面体系': 'Our blog now includes a complete page system',
        '精美的文章卡片布局': 'Beautiful article card layout',
        '按时间整理的文章归档': 'Articles archived by time',
        '标签云展示': 'Tag cloud display',
        '层级分类展示': 'Hierarchical category display',
        '美丽的图片展示': 'Beautiful image display',
        '记录生活点滴': 'Record life moments',
        '功能演示页面': 'Feature demo page',
        '友情链接展示': 'Friend links display',
        '文档系统': 'Documentation System',
        '完整的使用指南': 'Complete usage guide',
        '互动交流平台': 'Interactive communication platform',
        '主要特色': 'Main Features',
        '视觉效果': 'Visual Effects',
        '响应式设计': 'Responsive design',
        '完美适配各种设备': 'Perfect adaptation to various devices',
        '暗色模式': 'Dark mode',
        '护眼的深色主题': 'Eye-protecting dark theme',
        '渐变背景': 'Gradient background',
        '美丽的色彩过渡': 'Beautiful color transitions',
        '动画效果': 'Animation effects',
        '流畅的交互动画': 'Smooth interactive animations',
        '卡片布局': 'Card layout',
        '现代化的卡片设计': 'Modern card design',
        '实用功能': 'Practical Features',
        '本地搜索': 'Local search',
        '快速查找内容': 'Quick content search',
        '代码高亮': 'Code highlighting',
        '程序员友好': 'Programmer friendly',
        '数学公式': 'Mathematical formulas',
        '支持 LaTeX 语法': 'Supports LaTeX syntax',
        '图片懒加载': 'Image lazy loading',
        '优化加载速度': 'Optimize loading speed',
        'SEO优化': 'SEO optimization',
        '搜索引擎友好': 'Search engine friendly',
        '技术栈': 'Tech Stack',
        '前端技术': 'Frontend Technology',
        '现代化的博客技术栈': 'Modern blog technology stack',
        '功能特性': 'Feature Status',
        '功能': 'Feature',
        '状态': 'Status',
        '描述': 'Description'
    };
    
    // Chinese translations (reverse mapping)
    const chineseTranslations = {};
    for (const [chinese, english] of Object.entries(englishTranslations)) {
        chineseTranslations[english] = chinese;
    }
    
    let isEnglish = false;
    
    // Get current language state from localStorage
    function getLanguageState() {
        return localStorage.getItem('blog-language') === 'en';
    }
    
    // Set language state
    function setLanguageState(en) {
        localStorage.setItem('blog-language', en ? 'en' : 'zh');
        isEnglish = en;
    }
    
    // Translate text
    function translateText(text, toEnglish) {
        if (!text) return '';
        
        const translations = toEnglish ? englishTranslations : chineseTranslations;
        return translations[text] || text;
    }
    
    // Translate DOM elements
    function translateDOM(toEnglish) {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.parentNode.tagName !== 'SCRIPT' && 
                node.parentNode.tagName !== 'STYLE' &&
                node.parentNode.id !== 'translateLink') {
                textNodes.push(node);
            }
        }
        
        textNodes.forEach(textNode => {
            const originalText = textNode.textContent.trim();
            if (originalText) {
                const translatedText = translateText(originalText, toEnglish);
                if (translatedText !== originalText) {
                    textNode.textContent = textNode.textContent.replace(originalText, translatedText);
                }
            }
        });
        
        // Translate attributes
        const elementsWithAttributes = document.querySelectorAll('[title], [alt], [placeholder]');
        elementsWithAttributes.forEach(element => {
            if (element.title) {
                element.title = translateText(element.title, toEnglish);
            }
            if (element.alt) {
                element.alt = translateText(element.alt, toEnglish);
            }
            if (element.placeholder) {
                element.placeholder = translateText(element.placeholder, toEnglish);
            }
        });
    }
    
    // Initialize language state
    function initializeLanguage() {
        isEnglish = getLanguageState();
        if (isEnglish) {
            translateDOM(true);
            updateTranslateButton();
        }
    }
    
    // Update translate button text
    function updateTranslateButton() {
        const translateBtn = document.getElementById('translateLink');
        if (translateBtn) {
            translateBtn.textContent = isEnglish ? '中文' : 'English';
        }
    }
    
    // Toggle language
    function toggleLanguage() {
        isEnglish = !isEnglish;
        setLanguageState(isEnglish);
        translateDOM(isEnglish);
        updateTranslateButton();
        
        // Show notification
        const message = isEnglish ? 'Switched to English' : '已切换到中文';
        if (window.btf && window.btf.snackbarShow) {
            window.btf.snackbarShow(message);
        }
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLanguage);
    } else {
        initializeLanguage();
    }
    
    // Override the original translate function
    window.translateFn = {
        translatePage: toggleLanguage,
        Traditionalized: (text) => translateText(text, true),
        Simplized: (text) => translateText(text, false),
        translateInitialization: initializeLanguage
    };
    
    // Also initialize after pjax navigation
    if (typeof window.pjax !== 'undefined') {
        document.addEventListener('pjax:complete', initializeLanguage);
    }
})(); 