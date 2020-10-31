import React, { useEffect, useState } from "react";
import './css/Home.css';
import { Link ,useLocation } from 'react-router-dom'


function Home() {
  const [currentUrl, setCurrentUrl] = useState(useLocation().pathname)

  useEffect(() => {
    if (currentUrl == "/"){
      var navigation = document.querySelector("nav")
      navigation.classList.add("white")
      console.log()

    }else {
      var navigation = document.querySelector("nav")
      navigation.classList.remove("white")
    }
  },[])
  return (
    <div className="home">
      <section className="home__headerdiv">
        <h1>Petit <i class="brush">Pinceau</i></h1>
      </section>
      <section className="article profile" >
  
        <article>

          <h3>Title</h3>
          <p>Tomorrow X Together, communément connu sous le nom TXT, est un boys band sud-coréen formé en 2019 par Big Hit Entertainment. Le groupe est composé de cinq membres se prénommant Yeonjun, Soobin, Beomgyu, Taehyun et Hueningkai. Tomorrow X Together, communément connu sous le nom TXT, est un boys band sud-coréen formé en 2019 par Big Hit Entertainment. Le groupe est composé de cinq membres se prénommant Yeonjun, Soobin, Beomgyu, Taehyun et Hueningkai</p>
        </article>
        <img src="https://scontent.frba2-2.fna.fbcdn.net/v/t1.0-9/56636895_424905141417667_2186196816758833152_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=fl7hDzmUNk8AX-YPUf3&_nc_ht=scontent.frba2-2.fna&oh=4871afe045b9427154dc0c3120ed9f71&oe=5F9DFDDA"></img>


      </section>
      <section className="home__headerdiv" >
        <h1>Votre <i class="brush">atelier</i></h1>
      </section>
      

      
      <section className="article"> 

            <article>

              <h3>Title</h3>
              <p>Tomorrow X Together, communément connu sous le nom TXT, est un boys band sud-coréen formé en 2019 par Big Hit Entertainment. Le groupe est composé de cinq membres se prénommant Yeonjun, Soobin, Beomgyu, Taehyun et Hueningkai. Tomorrow X Together, communément connu sous le nom TXT, est un boys band sud-coréen formé en 2019 par Big Hit Entertainment. Le groupe est composé de cinq membres se prénommant Yeonjun, Soobin, Beomgyu, Taehyun et Hueningkai</p>
            </article>
            <img src="https://scontent.frba2-1.fna.fbcdn.net/v/t1.0-9/57368778_425415668033281_8381752789813952512_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_ohc=EZuqpUG8kLgAX8Hw-WN&_nc_ht=scontent.frba2-1.fna&oh=c46842b35cabdd362c2e85141a081fca&oe=5F9E14BF"></img>


      </section>
      
      
      

    </div>
  );
}

export default Home;
