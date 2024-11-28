
        // GSAP 및 ScrollTrigger 등록
        gsap.registerPlugin(ScrollTrigger);

        // intro section --------------------------------------

        // 하나의 ScrollTrigger로 관리
        const introTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
                start: "top top",
                end: "+=4000",
                scrub: true,
                pin: true,
            }
        });

        // 배경
        introTl.fromTo(".intro_img", {
            // 시작 상태
            autoAlpha: 0,
            scale: 1.5,
            width: "100vw",
            height: "100vh"
        }, {
            // 중간 상태
            autoAlpha: 1,
            scale: 1,
            width: "100vw",
            height: "100vh",
            duration: 3,
        })

        introTl
            .fromTo("#intro .t1",
                { autoAlpha: 0, y: 50 }, // 시작 상태
                { autoAlpha: 1, y: 0, duration: 1 }) // 투명도 증가 및 위치 이동
            .to("#intro .t1",
                { autoAlpha: 0, duration: 1 }, "+=1") // 투명도 다시 감소
            .fromTo("#intro .t2",
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, duration: 1 })
            .to("#intro .t2",
                { autoAlpha: 0, duration: 1 }, "+=1")
            .fromTo("#intro .t3",
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, duration: 1 })
            .to("#intro .t3",
                { autoAlpha: 0, duration: 1 }, "+=1")
            .fromTo("#intro .t4",
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, duration: 1 })
            .to("#intro .t4",
                { autoAlpha: 0, duration: 1 }, "+=1");





        // cardesign section --------------------------------------
        gsap.utils.toArray(".reveal").forEach((item) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 70%", // 요소가 뷰포트의 80% 지점에 도달할 때 시작
                end: "bottom 30%", // 요소가 뷰포트의 20% 지점에서 끝
                toggleActions: "play reset play reset",
                onEnter: () => { animate(item) },
            });

            // 초기 상태 설정
            item.style.opacity = "0";
        });

        // 애니메이션 함수
        const animate = (item) => {
            let x = 0;
            let y = 0;
            let delay = item.dataset.delay;

            if (item.classList.contains("reveal_top")) {
                x = 0,
                    y = -100
            } else if (item.classList.contains("reveal_right")) {
                x = -100,
                    y = 0
            } else if (item.classList.contains("reveal_left")) {
                x = 100,
                    y = 0
            } else if (item.classList.contains("reveal_bottom")) {
                x = 0,
                    y = 100
            } else {
                x = 100,
                    y = 0
            }

            gsap.fromTo(
                item,
                { autoAlpha: 0, x: x, y: y }, // 시작 상태: 투명, 오른쪽으로 이동
                { autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.25, ease: "expo" } // 종료 상태: 완전한 불투명, 원래 위치
            );
        };

        // spec --------------------------------------
        gsap.from(".spec_item", {
            y : 50,
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.3, // 0.3초간격으로 이미지가 보임
            scrollTrigger: {
                trigger: "#spec",
                start: "top 40%",
                toggleActions: "restart none restart none" // 다시 80% 지점에 도달할 때 애니메이션 재시작
            }
        });
