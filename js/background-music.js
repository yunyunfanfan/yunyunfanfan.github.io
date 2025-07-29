// Global Background Music Controller for Butterfly Theme
(function() {
    'use strict';
    
    // Music playlist - you can add more songs here
    // 注意：请将您的《Fractures》音乐文件放到 source/music/ 目录下
    const musicPlaylist = [
        {
            name: 'Fractures',
            artist: 'ILLENIUM feat. Nevve',
            url: '/music/fractures.mp3',  // 请将您的音乐文件重命名为 fractures.mp3 并放到 source/music/ 目录
            cover: 'https://i1.sndcdn.com/artworks-000165983511-k3evsv-t500x500.jpg',
            lrc: ''
        },
        {
            name: 'Fractures (Extended Mix)',
            artist: 'ILLENIUM feat. Nevve',
            url: '/music/fractures-extended.mp3',  // 可选：扩展版本
            cover: 'https://i1.sndcdn.com/artworks-000165983511-k3evsv-t500x500.jpg',
            lrc: ''
        },
        {
            name: 'Fractures (Instrumental)',
            artist: 'ILLENIUM',
            url: '/music/fractures-instrumental.mp3',  // 可选：纯音乐版本
            cover: 'https://i1.sndcdn.com/artworks-000165983511-k3evsv-t500x500.jpg',
            lrc: ''
        }
    ];
    
    let currentMusicIndex = 0;
    let isPlaying = false;
    let audioPlayer = null;
    let audioElement = null;
    
    // Create simple audio player
    function createSimpleAudioPlayer() {
        if (audioElement) {
            audioElement.pause();
            audioElement.remove();
        }
        
        const currentMusic = musicPlaylist[currentMusicIndex];
        
        // Create audio element
        audioElement = document.createElement('audio');
        audioElement.src = currentMusic.url;
        audioElement.preload = 'auto';
        audioElement.volume = 0.7;
        audioElement.loop = true;
        audioElement.style.display = 'none';
        
        // Add event listeners
        audioElement.addEventListener('play', () => {
            isPlaying = true;
            updateMusicButton();
        });
        
        audioElement.addEventListener('pause', () => {
            isPlaying = false;
            updateMusicButton();
        });
        
        audioElement.addEventListener('ended', () => {
            // Auto play next song
            currentMusicIndex = (currentMusicIndex + 1) % musicPlaylist.length;
            setTimeout(() => {
                createSimpleAudioPlayer();
                if (isPlaying) {
                    audioElement.play().catch(e => {
                        console.log('Failed to play music:', e);
                        showError('音乐播放失败，请检查网络连接');
                    });
                }
            }, 1000);
        });
        
        audioElement.addEventListener('error', (e) => {
            console.log('Audio error:', e);
            showError('音乐加载失败，正在尝试下一首...');
            // Try next song
            currentMusicIndex = (currentMusicIndex + 1) % musicPlaylist.length;
            setTimeout(() => {
                createSimpleAudioPlayer();
            }, 1000);
        });
        
        document.body.appendChild(audioElement);
    }
    
    // Create music control button
    function createMusicButton() {
        // Remove existing button if any
        const existingButton = document.querySelector('.background-music-btn');
        if (existingButton) {
            existingButton.remove();
        }
        
        // Create button
        const button = document.createElement('button');
        button.className = 'background-music-btn';
        button.innerHTML = '<i class="fas fa-music"></i>';
        button.style.cssText = `
            position: fixed;
            top: 150px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: #42a5f5;
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 18px;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(66, 165, 245, 0.3);
            transition: all 0.3s ease;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.background = '#1976d2';
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 4px 15px rgba(66, 165, 245, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.background = '#42a5f5';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 2px 10px rgba(66, 165, 245, 0.3)';
        });
        
        // Add click event
        button.addEventListener('click', toggleMusic);
        
        // Add to page
        document.body.appendChild(button);
        
        // Initialize player
        createSimpleAudioPlayer();
        
        // Load saved state
        const savedState = localStorage.getItem('background-music-state');
        if (savedState === 'playing') {
            isPlaying = true;
            audioElement.play().catch(e => {
                console.log('Failed to play music:', e);
                showError('音乐播放失败，请检查网络连接');
            });
        }
    }
    
    // Toggle music play/pause
    function toggleMusic() {
        if (!audioElement) return;
        
        if (isPlaying) {
            audioElement.pause();
            localStorage.setItem('background-music-state', 'paused');
        } else {
            audioElement.play().catch(e => {
                console.log('Failed to play music:', e);
                showError('音乐播放失败，请检查网络连接');
            });
            localStorage.setItem('background-music-state', 'playing');
        }
    }
    
    // Update button appearance
    function updateMusicButton() {
        const button = document.querySelector('.background-music-btn');
        if (button) {
            const icon = button.querySelector('i');
            if (isPlaying) {
                icon.className = 'fas fa-pause';
                button.style.background = '#4caf50';
            } else {
                icon.className = 'fas fa-music';
                button.style.background = '#42a5f5';
            }
        }
    }
    
    // Show error message
    function showError(message) {
        if (window.btf && window.btf.snackbarShow) {
            window.btf.snackbarShow(message);
        } else {
            console.log(message);
        }
    }
    
    // Keyboard shortcuts
    function setupKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            // Space bar to toggle music (when not in input fields)
            if (e.code === 'Space' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                e.preventDefault();
                toggleMusic();
            }
            
            // M key to toggle music
            if (e.code === 'KeyM' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                e.preventDefault();
                toggleMusic();
            }
            
            // Left arrow to previous song
            if (e.code === 'ArrowLeft' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                e.preventDefault();
                currentMusicIndex = (currentMusicIndex - 1 + musicPlaylist.length) % musicPlaylist.length;
                createSimpleAudioPlayer();
                if (isPlaying) {
                    audioElement.play().catch(e => {
                        console.log('Failed to play music:', e);
                    });
                }
            }
            
            // Right arrow to next song
            if (e.code === 'ArrowRight' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                e.preventDefault();
                currentMusicIndex = (currentMusicIndex + 1) % musicPlaylist.length;
                createSimpleAudioPlayer();
                if (isPlaying) {
                    audioElement.play().catch(e => {
                        console.log('Failed to play music:', e);
                    });
                }
            }
        });
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            createMusicButton();
            setupKeyboardShortcuts();
        });
    } else {
        createMusicButton();
        setupKeyboardShortcuts();
    }
    
    // Also initialize after pjax navigation
    if (typeof window.pjax !== 'undefined') {
        document.addEventListener('pjax:complete', function() {
            createMusicButton();
        });
    }
    
    // Show help tooltip on first visit
    if (!localStorage.getItem('music-help-shown')) {
        setTimeout(() => {
            if (window.btf && window.btf.snackbarShow) {
                window.btf.snackbarShow('🎵 《Fractures》背景音乐已启用！点击右上角音乐按钮或按 M 键控制播放');
            }
            localStorage.setItem('music-help-shown', 'true');
        }, 2000);
    }
})(); 