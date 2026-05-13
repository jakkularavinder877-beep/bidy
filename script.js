<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Happy Birthday Pranthi 💖</title>

<style>
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
    }

    body{
        background: linear-gradient(135deg,#ff9ec4,#ffd6e7,#ffeef5);
        overflow-x:hidden;
        color:#fff;
        text-align:center;
    }

    .container{
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:20px;
    }

    .card{
        background: rgba(255,255,255,0.15);
        backdrop-filter: blur(10px);
        border-radius:25px;
        padding:35px;
        width:90%;
        max-width:450px;
        box-shadow:0 8px 25px rgba(0,0,0,0.2);
    }

    h1{
        margin-bottom:15px;
        font-size:2rem;
    }

    p{
        margin-bottom:20px;
        line-height:1.6;
    }

    input{
        width:100%;
        padding:14px;
        border:none;
        border-radius:12px;
        outline:none;
        margin-bottom:20px;
        font-size:1rem;
    }

    button{
        padding:12px 25px;
        border:none;
        border-radius:12px;
        background:#ff4f8b;
        color:white;
        font-size:1rem;
        cursor:pointer;
        transition:0.3s;
    }

    button:hover{
        transform:scale(1.05);
        background:#ff2f74;
    }

    .hidden{
        display:none;
    }

    .gallery{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        gap:15px;
        margin-top:20px;
    }

    .gallery img,
    .gallery video{
        width:280px;
        border-radius:20px;
        box-shadow:0 5px 15px rgba(0,0,0,0.3);
    }

    .final-message{
        padding:30px;
        animation: glow 2s infinite alternate;
    }

    @keyframes glow{
        from{
            text-shadow:0 0 10px #fff;
        }
        to{
            text-shadow:0 0 25px #ff2f74;
        }
    }

    .hearts{
        position:fixed;
        width:100%;
        height:100%;
        overflow:hidden;
        top:0;
        left:0;
        pointer-events:none;
    }

    .heart{
        position:absolute;
        color:pink;
        animation: float 6s linear infinite;
        font-size:20px;
    }

    @keyframes float{
        0%{
            transform:translateY(100vh);
            opacity:1;
        }
        100%{
            transform:translateY(-10vh);
            opacity:0;
        }
    }
</style>
</head>

<body>

<div class="hearts"></div>

<!-- LOGIN PAGE -->
<div class="container" id="loginPage">
    <div class="card">
        <h1>💖 Welcome Pranu 💖</h1>
        <p>A small surprise made with lots of love & friendship ✨</p>

        <input type="password" id="password" placeholder="Enter Sweet Password">
        <button onclick="checkPassword()">Open Surprise 🎁</button>

        <p id="error" style="color:yellow; margin-top:15px;"></p>
    </div>
</div>

<!-- GALLERY PAGE -->
<div class="container hidden" id="galleryPage">
    <div class="card" style="max-width:1000px;">
        <h1>Memories With Pranu 💕</h1>
        <p>Beautiful moments deserve beautiful memories ✨</p>

        <div class="gallery">

            <!-- ADD YOUR PHOTOS -->
            <img src="photo1.jpeg" alt="Photo 1">
            <img src="photo2.jpeg" alt="Photo 2">
            <img src="photo3.jpeg" alt="Photo 3">

            <!-- ADD YOUR VIDEOS -->
            <video controls autoplay muted loop>
                <source src="video1.mp4" type="video/mp4">
            </video>

            <video controls autoplay muted loop>
                <source src="video2.mp4" type="video/mp4">
            </video>

        </div>

        <br><br>
        <button onclick="showFinal()">Continue 💖</button>
    </div>
</div>

<!-- FINAL PAGE -->
<div class="container hidden" id="finalPage">
    <div class="card final-message">
        <h1>🎂 Happy Birthday Pranu 💖</h1>

        <p>
            You are one of the sweetest people in life 🌸 <br><br>

            A true friend like you makes every moment special ✨ <br><br>

            May your smile always shine bright, <br>
            your dreams come true, <br>
            and your life be filled with happiness, love, and endless memories 💕
        </p>

        <h2>Forever Grateful For Our Friendship 💫</h2>
    </div>
</div>

<script>
    function checkPassword(){
        let pass = document.getElementById("password").value;

        if(pass === "Love pranu"){
            document.getElementById("loginPage").classList.add("hidden");
            document.getElementById("galleryPage").classList.remove("hidden");
        }
        else{
            document.getElementById("error").innerText = "Wrong Password 💔";
        }
    }

    function showFinal(){
        document.getElementById("galleryPage").classList.add("hidden");
        document.getElementById("finalPage").classList.remove("hidden");
    }

    // Floating Hearts
    const heartsContainer = document.querySelector(".hearts");

    function createHeart(){
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);
    }

    setInterval(createHeart,300);
</script>

</body>
</html>