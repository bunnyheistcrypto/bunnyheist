export const animateMovement = (keys, player, animationType) => {
  const runningKeys = ['KeyW', 'KeyS', 'KeyA', 'KeyD'];
  if (!player) return false;
  if (
    keys.some((key) => runningKeys.includes(key)) &&
    !player.anims.isPlaying
  ) {
    player.play(animationType);
  } else if (
    !keys.some((key) => runningKeys.includes(key)) &&
    player.anims.isPlaying
  ) {
    player.stop(animationType);
  }
};
