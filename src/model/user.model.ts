export class UserModel {
    uuid?: string;
    private enabled: boolean;
    displayName: string;
    email: string;
    lastLogin: number;

    constructor(uuid: string, displayName: string, email: string) {
        this.uuid = uuid;
        this.displayName = displayName;
        this.email = email;
        this.lastLogin = new Date().getTime();
    }

    isEnabled(): boolean {
        return this.enabled;
    }
}

export class AdminUserModel extends UserModel {
}

export class CandidateUserModel extends UserModel {
    relocation: boolean;

    country: string;
    city: string;
    skills: Array<string>;

    constructor(
        uuid: string,
        displayName: string,
        email: string,
        country: string,
        city: string,
        skills: Array<string>,
        relocation: boolean
    ) {
        super(uuid, displayName, email);
        this.country = country;
        this.city = city;
        this.skills = skills;
        this.relocation = relocation;
    }
}

export class CompanyUserModel extends UserModel {
    country: string;
    city: string;
    skills: Array<string>;

    constructor(
        uuid: string,
        displayName: string,
        email: string,
        country: string,
        city: string,
        skills: Array<string>
    ) {
        super(uuid, displayName, email);
    }
}

export class RecruiterUserModel extends UserModel {
    country: string;
    city: string;
}
