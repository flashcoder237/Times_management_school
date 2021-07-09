import { Configuration } from '../types/configucration';
export default {
    iniConf() {
        let conf: Configuration = {
            id: 0,
            name: "",
            pause_duration: 1,
            period_duration: 1,
            begin_at: 8,
            end_at: 18,
            Monday: true,
            Tuesday: true,
            Wednesday: true,
            Thursday: true,
            Friday: true,
            Saturday: true,
            Sunday: false
        }
        return conf;
    }
}