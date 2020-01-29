import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Character from './Character.js';
import styles from './App.css';


import mortyImg from '../assets/morty.jpg';
import conroyImg from '../assets/conroy.jpg';
import cynthiaImg from '../assets/cynthia.jpg';
import toxicImg from '../assets/toxic.jpg';
import bethImg from '../assets/beth.jpg';
import visorImg from '../assets/visor.jpg';
import coatImg from '../assets/coat.jpg';
import privateImg from '../assets/private.jpg';


const App = () => (
  <React.Fragment>
    <Header />

    <div className={styles.listDiv}>
      <Character image={mortyImg} name="Morty" description="id: 2 - created 2 years ago" status="Alive" species="Human" gender="Male" origin="Earth (C-137)" lastLocation="Earth (Replacement Dimension)" />

      <Character image={conroyImg} name="Conroy" description="id: 71 - created 2 years ago" status="Dead" species="Robot" gender="Unknown" origin="Earth (Replacement Dimension)" lastLocation="Earth (C-137)" />

      <Character image={cynthiaImg} name="Cynthia" description="id: 87 - created 2 years ago" status="Dead" species="Alien, Zigerian" gender="Female" origin="unknown" lastLocation="Zigerian's base" />

      <Character image={toxicImg} name="Toxic Rick" description="id: 361 - created 2 years ago" status="Dead" species="Humanoid, Rick's toxic side" gender="Male" origin="Detoxifier" lastLocation="Earth (Replacement Dimension)" />

      <Character image={bethImg} name="Beth's Mytholog" description="id: 40 - created 2 years ago" status="Dead" species="Mytholog" gender="Female" origin="Nuptia 4" lastLocation="Nuptia 4" />

      <Character image={visorImg} name="Visor Rick" description="id: 487 - created 2 years ago" status="Dead" species="Human" gender="Male" origin="unknown" lastLocation="Citadel of Ricks" />

      <Character image={coatImg} name="P-coat Rick" description="id: 489 - created 2 years ago" status="Dead" species="Human" gender="Male" origin="unknown" lastLocation="Citadel of Ricks" />

      <Character image={privateImg} name="Private Sector Rick" description="id: 479 - created 2 years ago" status="Dead" species="Human" gender="Male" origin="unknown" lastLocation="Citadel of Ricks" />

    </div>
  
    <Footer />
  </React.Fragment>
);

export default App;
