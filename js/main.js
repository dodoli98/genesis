document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('model_box_wrapper');
    const ul = wrapper.querySelector('ul');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    
    // 박스 너비 계산 (gap 포함)
    const boxWidth = document.querySelector('.model_box').offsetWidth + 16; // 16은 gap 값
    let currentIndex = 0;
    const totalBoxes = ul.children.length;
    const visibleBoxes = 3;

    // 최대 슬라이드 가능한 인덱스 계산
    const maxIndex = totalBoxes - visibleBoxes;

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            ul.style.transform = `translateX(-${currentIndex * (boxWidth)}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            ul.style.transform = `translateX(-${currentIndex * (boxWidth)}px)`;
        }
    });
});