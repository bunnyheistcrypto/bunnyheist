import { PLAYER_SPEED, SHIP_HEIGHT, SHIP_WIDTH } from './player/constants';
import { mapBounds } from './mapBounds';
import { boxCollider } from './objects/box/utils';

const otherObjectsBoundaries = (x, y, state) => {
  return !boxCollider(x, y, state);
}

const isWithinMovementBoundaries = (x, y) => {
  return !mapBounds[y] ? true : !mapBounds[y].includes(x);
};

export const movePlayer = (keys, player, state) => {
  let playerMoved = false;
  const absPlayerX = player.x + SHIP_WIDTH / 2;
  const absPlayerY = player.y + SHIP_HEIGHT / 2 + 20;
  if (
    keys.includes('KeyW') &&
    isWithinMovementBoundaries(absPlayerX, absPlayerY - PLAYER_SPEED) &&
    otherObjectsBoundaries(player.x, player.y - PLAYER_SPEED, state)
  ) {
    playerMoved = true;
    player.y = player.y - PLAYER_SPEED;
  }
  if (
    keys.includes('KeyS') &&
    isWithinMovementBoundaries(absPlayerX, absPlayerY + PLAYER_SPEED) &&
    otherObjectsBoundaries(player.x, player.y + PLAYER_SPEED, state)
  ) {
    playerMoved = true;
    player.y = player.y + PLAYER_SPEED;
  }
  if (
    keys.includes('KeyA') &&
    isWithinMovementBoundaries(absPlayerX - PLAYER_SPEED, absPlayerY) &&
    otherObjectsBoundaries(player.x - PLAYER_SPEED, player.y, state)
  ) {
    playerMoved = true;
    player.x = player.x - PLAYER_SPEED;
    player.flipX = true;
  }
  if (
    keys.includes('KeyD') &&
    isWithinMovementBoundaries(absPlayerX + PLAYER_SPEED, absPlayerY) &&
    otherObjectsBoundaries(player.x + PLAYER_SPEED, player.y, state)
  ) {
    playerMoved = true;
    player.x = player.x + PLAYER_SPEED;
    player.flipX = false;
  }
  return playerMoved;
};
