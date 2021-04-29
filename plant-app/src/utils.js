export const getUserName = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return user.username;
    }
    return '';
}