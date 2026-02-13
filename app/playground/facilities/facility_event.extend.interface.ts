import { type AmbientPlayer } from "./AmbientPlayer";
import { AvailableFacility } from "./Facility";

export type MusicTimeBroadcastEvent = {
    // derived convenience values (precomputed)
    measure: number
    beat: number

    // tick related.
    /**
     * Absolute tick since start (integer)
     */
    tick_abs: number
    /** 
     * Tick position inside current measure (integer).
     */
    tick_in_measure: number
    /**
     * pulses per quarter note (integer).
     */
    ppq: number

    // Stored for convinience.
    /** 
     * Number of ticks per beat (resolution).
     */
    ticks_per_beat: number
    /** 
     * Number of beats per measure (time signature numerator)
     */
    beats_per_measure: number

    // timing information in milliseconds
    start_time__in_ms: number
    now_time__in_ms: number
}

export type FacilityMountEventDetail = {
    name: AvailableFacility
    element: HTMLElement
    player?: AmbientPlayer
}

export type FacilityUnmountEventDetail = {
    name: AvailableFacility
}

declare global
{
    interface DocumentEventMap
    {
        "facility_click": CustomEvent<AvailableFacility>
        "facility_exit": CustomEvent<AvailableFacility | undefined>
        "facility_mount": CustomEvent<FacilityMountEventDetail>
        "facility_unmount": CustomEvent<FacilityUnmountEventDetail>
        "music_time_broadcast": CustomEvent<MusicTimeBroadcastEvent>
    }
}