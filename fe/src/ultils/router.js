export const ADMIN_PATH = "/admin"

export const ROUTERS = {
    USER: {
        HOME: "",
        LOGIN: "/login",
        REGISTER: "/register",
        PROFILE: "/profile",
        Role: "/users/role",
    },
    ADMIN: {
        DASHBOARD: `${ADMIN_PATH}/dashboard`
    }
};