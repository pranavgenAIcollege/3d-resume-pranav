export const config = {
    AUDIOS_PATH: "assets/audios",
    MODELS_PATH: "assets/models",
    ANIMATIONS_PATH: "assets/animations",
    MOTION_AMPLITUDE: 0.95,
    LIPSYNC_CORRESPONDENCE: {
        default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        A: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // "viseme_PP": 1
        B: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // "viseme_kk": 5
        C: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // "viseme_I": 12
        D: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // "viseme_AA": 10
        E: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // "viseme_O": 13
        F: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // "viseme_U": 14
        G: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // "viseme_FF": 2
        H: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // "viseme_nn": 8
        X: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // "viseme_sil": 0
    },
};