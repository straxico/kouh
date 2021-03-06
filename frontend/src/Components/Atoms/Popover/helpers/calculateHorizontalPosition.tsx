import { ANCHORS } from '../consts';

const isInside = (p: AnchorsCore, canBe) => {
  if (p === ANCHORS.START && canBe[p]) {
    return ANCHORS.START;
  }
  if (p === ANCHORS.END && canBe[p]) {
    return ANCHORS.END;
  }
  return false;
};

const calculateHorizontalPosition: CalculateHorizontalPosition = (desiredAnchor, positions) => {
  const canBe = {
    [ANCHORS.START]: positions.containerLeft + positions.popoverWidth < positions.windowWidth,
    [ANCHORS.END]: positions.containerLeft + positions.containerWidth >= positions.popoverWidth,
  };

  // FIX: at first mount all dimensions are zero
  if (positions.windowWidth == 0 || positions.popoverWidth == 0) return null;

  const possibleAnchor = desiredAnchor
    .map(p => isInside(p, canBe))
    .filter(p => typeof p === 'string');

  const posAnchor = possibleAnchor[0];
  if (typeof posAnchor === 'string') {
    return posAnchor;
  }
  return null;
};

export default calculateHorizontalPosition;
