export type GetUserData = {
    userData: UserDataInterface[];
}

type UserDataInterface = {
    event: string;
}

export type GetEvent = {
    id: string;
    type: string;

    actor: {
        id: number;
        login: string;
        display_login: string;
        gravatar_id: string;
        url: string;
        avatar_url: string;
    };

    repo: {
        id: number;
        name: string;
        url: string;
    };

    payload: {
        action: string;
        push_id: number;
        size: number;
        distinct_size: number;
        ref: string;
        head: string;
        before: string;
        pull_request: {
            url: string;
            number: number;
            user: {
                login: string;
                html_url: string;
            };
        };
        commits: [
            {
                sha: string;
                author: {
                    email: string;
                    name: string;
                };
                message: string;
                distinct: boolean;
                url: string;
            }
        ];
        public: boolean;
        created_at: string;
    };
}
