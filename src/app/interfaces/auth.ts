export interface UserRequest {
    name:            string;
    lastname:        string;
    second_lastname: string;
    date_of_birth:   Date;
    nationality:     string;
    mobile:          string;
    email:           string;
    password:        string;
}

export interface UserResponse {
    user:  User;
    token: string;
}

export interface User {
    name:            string;
    lastname:        string;
    second_lastname: string;
    date_of_birth:   Date;
    nationality:     string;
    mobile:          string;
    email:           string;
    updated_at:      Date;
    created_at:      Date;
    id:              number;
}