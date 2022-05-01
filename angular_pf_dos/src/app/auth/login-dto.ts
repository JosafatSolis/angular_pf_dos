import { RawLoginValueItem } from './raw-login-value-item';

export class LoginDTO {
    user: string;
    pwd: string;

    constructor(private raw: RawLoginValueItem) {
        // Aquí iría la transformación necesaria para que lo que manda el form, se ajuste al DTO que se
        // enviará en el HttpClient
        this.user = raw.user;
        this.pwd = raw.pwd;
    }
}
