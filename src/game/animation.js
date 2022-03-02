export const animateMovement = (keys, player) => {
  const runningKeys = ['KeyW', 'KeyS', 'KeyA', 'KeyD'];
  if (
    keys.some((key) => runningKeys.includes(key)) &&
    !player.anims.isPlaying
  ) {
    player.play('running');
  } else if (
    !keys.some((key) => runningKeys.includes(key)) &&
    player.anims.isPlaying
  ) {
    player.stop('running');
  }
};
