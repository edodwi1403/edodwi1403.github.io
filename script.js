const wrapper= document.querySelector(".wrapper");
const question= document.querySelector(".question");
const gif= document.querySelector(".gif");
const yesBtn= document.querySelector(".yes-btn");
const noBtn= document.querySelector(".no-btn");

yesBtn.addEventListener("click", ()	=> {
	question.innerHTML= "Barakallahu fii umrik, Putri.<br>Semoga senantiasa diberi <br>kesehatan, umur yang berkah, <br>dan sukses selalu.<br>Aamiin.";
	gif.src= "Image/pray.gif";
});

noBtn.addEventListener("mouseover", () =>{
	const noBtnRect= noBtn.getBoundingClientRect();
	const maxX= window.innerWidth - noBtnRect.width;
	const maxY= window.innerHeight - noBtnRect.height;

	const randomX= Math.floor(Math.random() * maxX);
	const randomY= Math.floor(Math.random() * maxY);

	noBtn.style.left= randomX + "px";
	noBtn.style.top= randomY + "px";
});