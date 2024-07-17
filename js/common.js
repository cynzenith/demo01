// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('.nav-menu a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // 기본 앵커 클릭 동작을 막음

//             // 모든 링크에서 활성 스타일 제거
//             navLinks.forEach(nav => {
//                 nav.children[0].style.color = '';
//                 nav.children[0].style.borderBottom = '';
//             });

//             // 클릭한 링크에 활성 스타일 추가
//             this.children[0].style.color = 'rgb(149, 106, 89)';
//             this.children[0].style.borderBottom = '2px solid rgb(147, 112, 98)';

//             // 링크로 이동
//             const targetUrl = this.getAttribute('href');
//             setTimeout(() => {
//                 window.location.href = targetUrl;
//             }, 100); // 스타일 변경을 위해 약간의 지연 시간을 줌
//         });
//     });
// });
