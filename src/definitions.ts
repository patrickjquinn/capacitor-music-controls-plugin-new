import { PluginListenerHandle } from "@capacitor/core";

export interface CapacitorMusicControlsInfo {
    track?: string;
    artist?: string;
    cover?: string;
    isPlaying?: boolean;
    dismissable?: boolean;
    hasPrev?: boolean;
    hasNext?: boolean;
    hasSkipForward?: boolean;
    hasSkipBackward?: boolean;
    skipForwardInterval?: number;
    skipBackwardInterval?: number;
    hasScrubbing?: boolean;
    hasClose?: boolean;
    album?: string;
    duration?: number;
    elapsed?: number;
    ticker?: string;
    playIcon?: string;
    pauseIcon?: string;
    prevIcon?: string;
    nextIcon?: string;
    closeIcon?: string;
    notificationIcon?: string;
    iconsColor?: number;
}

export interface CapacitorMusicControlsPlugin {
    /**
     * Create the media controls
     * @param options {MusicControlsOptions}
     * @returns {Promise<any>}
     */
    create(options: CapacitorMusicControlsInfo): Promise<any>;

    /**
     * Destroy the media controller
     * @returns {Promise<any>}
     */
    destroy(): Promise<any>;

    /**
     * Subscribe to the events of the media controller
     * @returns {Observable<any>}
     */
    // subscribe(): Observable<any>;
    // /**
    //  * Start listening for events, this enables the Observable from the subscribe method
    //  */
    // listen(): void;
    /**
     * Toggle play/pause:
     * @param isPlaying {boolean}
     */
    updateIsPlaying(isPlaying: boolean): void;

    /**
     * Update elapsed time, optionally toggle play/pause:
     * @param args {Object}
     */
    updateElapsed(args: {
        elapsed: number;
        isPlaying: boolean;
    }): void;

    /**
     * Toggle dismissable:
     * @param dismissable {boolean}
     */
    updateDismissable(dismissable: boolean): void;

    addListener(event: string, callback: (info: any) => void): PluginListenerHandle
}
