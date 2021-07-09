export interface Configuration {
    id: number
    name: string
    period_duration: number
    pause_duration: number
    begin_at: number
    end_at: number
    // Jours ouvrables
    Monday: boolean
    Tuesday: boolean
    Wednesday: boolean
    Thursday: boolean
    Friday: boolean
    Saturday: boolean
    Sunday: boolean
}