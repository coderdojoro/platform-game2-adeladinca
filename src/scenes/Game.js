/// <reference path="../../typings/phaser.d.ts" />
// @ts-check

import Phaser from 'phaser';
import Hero from '../entities/Hero.js';

class Game extends Phaser.Scene {
 
preload() {
  this.load.image('mage', 'assets/mage/mage.png');
  this.load.spritesheet('idle-spritesheet', 'assets/mage/idle.png', { frameWidth: 128, frameHeight: 128 });
}

create() {
  this.anims.create({
    key: 'hero-idle',
    frames: [
      { frame: 0, key: 'mage', duration: 5000 },
      ...this.anims.generateFrameNumbers('idle-spritesheet', {})
    ],
    frameRate: 6,
    repeat: -1
  });

  let hero = new Hero(this, 400, 300);


}
  
 }
export default Game;