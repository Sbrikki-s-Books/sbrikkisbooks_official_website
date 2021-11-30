import React from 'react'
import * as styles from './try.module.scss'

function Try() {
    var $body=$("body"),
      $heroA=$("#hero-section-a img"),
      $heroB=$("#hero-section-b img"),
      $heroC=$("#hero-section-c img");
      
      TweenMax.set( $heroA, { transformStyle: 'preserve-3d'  });
      TweenMax.set( $heroB, { transformStyle: 'preserve-3d'  });
      TweenMax.set( $heroC, { transformStyle: 'preserve-3d'  });
      
      $body.mousemove(function(e) {
          
          var sxPos =  e.pageX / $body.width()  * 100 - 50;
          var syPos =  e.pageY / $body.height() * 100 - 50;
          console.log("x:" + sxPos + ", y:" + syPos);
          TweenMax.to( $heroA, 1, { rotationY: 0.05 * sxPos, rotationX: 0.20 * syPos, rotationZ: '-0.1', transformPerspective:500, transformOrigin:'center center' });
          TweenMax.to( $heroB, 1, { rotationY: 0.10 * sxPos, rotationX: 0.15 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
          TweenMax.to( $heroC, 1, { rotationY: 0.15 * sxPos, rotationX: 0.10 * syPos, rotationZ: 0.10, transformPerspective:500, transformOrigin:'center center' });
  
      });
  
  
  );

    return (
        <div>
            <div className={styles.above-fold}>
                <div className={styles.hero-section} id="hero-section-a">
                    <img src="https://videosmith.wpengine.com/wp-content/uploads/2016/06/tyler-movi.jpg" /></div>
                <div className={styles.hero-section} id="hero-section-b">
                    <img src="https://videosmith.wpengine.com/wp-content/uploads/2016/06/tyler-movi.jpg" /></div>
                <div className={styles.hero-section} id="hero-section-c">
                    <img src="https://videosmith.wpengine.com/wp-content/uploads/2016/06/tyler-movi.jpg" /></div>
            </div>
            <p className={styles.photo-credit}>Photo Credit: <a href="http://videosmith.com">Videosmith</a></p>
        </div>
    )
}

export default Try
