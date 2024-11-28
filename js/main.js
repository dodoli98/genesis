document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('model_box_wrapper');
    const ul = wrapper.querySelector('ul');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const boxWidth = document.querySelector('.model_box').offsetWidth + 16; // 16은 gap 값
    const totalBoxes = ul.children.length;
    const visibleBoxes = Math.floor(wrapper.offsetWidth / boxWidth); // 보이는 박스 개수
    const maxIndex = totalBoxes - visibleBoxes; // 마지막 이동 가능한 인덱스

    let currentIndex = 0; // 현재 슬라이드 인덱스
    const pagination = document.querySelector('.pagination');
    const dots = []; // .dot 요소 저장 배열

    // .dot 생성
    for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === 0 ? ' active' : ''); // 첫 번째 dot 활성화
        dot.addEventListener('click', () => {
            currentIndex = i;
            ul.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
            updateActiveDot(currentIndex);
        });
        pagination.appendChild(dot);
        dots.push(dot);
    }

    // 활성화된 .dot 업데이트 함수
    const updateActiveDot = (index) => {
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };

    // next 버튼
    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            ul.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
            updateActiveDot(currentIndex);
        }
    });

    // prev 버튼
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            ul.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
            updateActiveDot(currentIndex);
        }
    });
});
