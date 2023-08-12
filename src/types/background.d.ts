declare namespace NsBackground {
    /**
     * Main background object.
     */
    interface backgroundObj {
        width: number;
        oneImageWidth: number;
        imageRepeated: number;
        animationState: "BCK_ANIM_STATE::START" | "BCK_ANIM_STATE::STOP";
        animationCurrX: number;
        speed: number;
        xArray: number[];
    }
}


export default NsBackground;