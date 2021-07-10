export interface Period{
    id: number
    hour_begin: number
    hour_end : number
    is_pause : boolean
    is_occupied: boolean
    was_occupied: boolean
    day: Date

  /* getEnseignant(code: number): String */
}
