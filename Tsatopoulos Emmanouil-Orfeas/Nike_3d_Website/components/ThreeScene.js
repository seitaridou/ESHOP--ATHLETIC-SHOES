import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only run this code on the client side
    if (typeof window === "undefined") return;

    const hero = document.getElementById("hero");

    //Create a Three.JS Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    let object;

    let objToRender = 'nike';
    const loader = new GLTFLoader();

    loader.load(
      `./${objToRender}/scene.gltf`,
      function (gltf) {
        object = gltf.scene;
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      function (error) {
        console.error(error);
      }
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    // ✅ Set pixel ratio BEFORE setting size
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    camera.position.z = 3;

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    function animate() {
      scene.rotation.y += 0.01; // Change this value to adjust speed

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    gsap.registerPlugin(ScrollTrigger);
    scene.transparent = true;

// // Animate from center to left (-2)
gsap.to(scene.position, {
  x: -2,
  scrollTrigger: {
    trigger: ".trigger-1",
    start: "top 60%",
    end: "top 40%",
    scrub: 1.5, // 🔄 Smoother scroll-based interpolation
    markers: false
  }
});

gsap.fromTo("#right-box",
  { x: "-100%",
    opacity: 0,
  }, // Start at -100%
  {
    x: "0",    // End at 100%
    opacity: 1,
    scrollTrigger: {
      trigger: ".trigger-1",
      start: "top 60%",
      end: "top 40%",
      scrub: 1.5,
      markers: false
    }
  }
);

gsap.fromTo("#left-box",
  { x: "100%",
    opacity: 0,
  }, // Start at -100%
  {
    x: "0",    // End at 100%
    opacity: 1,
    scrollTrigger: {
      trigger: ".trigger-2",
      start: "top 80%",
      end: "top 61%",
      scrub: 1.5,
      markers: false
    }
  }
);

// // Force starting point at -2 inside the animation
gsap.fromTo(
  scene.position,
  { x: -2 }, // Start at -2
  {
    x: 2,     // End at 2
    scrollTrigger: {
      trigger: ".trigger-2",
      start: "top 80%",
      end: "top 61%",
      scrub: 1.5,
      markers: false
    }
  }
);
        // Set initial position
    // Start centered
    scene.position.x = 2;

gsap.to(scene.position, {
  x: 0,     
  scrollTrigger: {
    trigger: ".trigger-3",
    start: "top 30%",
    end: "top 10%",
    scrub: 1.5,
    markers: false
  }
});

gsap.to(".three-scene-wrapper", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".trigger-3",
    start: "top 20%",
    end: "top 10%",
    scrub: 1.5,
    markers: false
  }
});

scene.position.x = 0;



    // gsap START
    const tl = gsap.timeline({ defaults: { duration: 0.8 } })
    tl.fromTo("nav", {y: "-100" }, { y: "0%" })

    tl.fromTo(".hero-text", { duration: 0.9, opacity: "0"}, { opacity: "1" })
    gsap.from(".circle1", { x: "100%", duration: 0.8, ease: "ease.out" });
    gsap.from(".circle2", { x: "-100%", duration: 0.8, ease: "ease.out" });
    gsap.fromTo(camera.position, { z: 50 }, { z: 3 });

    animate();

    ScrollTrigger.create({
      onUpdate: self => {

        if (self.scroll() === 0) {
          console.log("start of the page");
          gsap.to("nav", { y: "0%", duration: 0.6, ease: "bounce.out" });
        } else {
          gsap.to("nav", { y: "-100%", duration: 0.4, ease: "power2.in" });
        }
        // console.log("Scroll position:", self.scroll());
        // console.log("Progress through page:", self.progress);
      }
    });
    

    // Cleanup on component unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };

  }, []);

  return <div ref={containerRef}></div>;
};

export default ThreeScene;
