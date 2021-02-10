const SELECTOR = {
  TITLE: {
    CONTAINER: ".title-container",
  },

  CAR_NAME: {
    CONTAINER: ".car-name-input-container",
    INPUT: ".car-name-input-container__input",
    BUTTON: ".car-name-input-container__button",
  },

  LAP_COUNT: {
    CONTAINER: ".lap-count-input-container",
    INPUT: ".lap-count-input-container__input",
    BUTTON: ".lap-count-input-container__button",
  },

  GAME_PROGRESS: {
    CONTAINER: ".game-progress-container",
    CAR_NAME: ".car-player",
    FORWARD_ICON: ".forward-icon",
  },

  GAME_RESULT: {
    CONTAINER: ".game-result-container",
  },
};

const MESSAGE = {
  CAR_NAME: {
    MIN_NUMBER: "두 개 이상의 자동차 이름을 입력해주세요.",
    MAX_LENGTH: "자동차 이름은 5자 이하로 지어주세요.",
  },
  LAP_COUNT: {
    NOT_A_NUMBER: "숫자를 입력해주세요",
    OUT_OF_RANGE: "1 이상 20 이하의 정수를 입력해주세요",
  },
  COMMON: {
    INVALID_ACCESS: "잘못된 접근입니다",
  },
};

export { SELECTOR, MESSAGE };