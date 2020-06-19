const login = (email, token, userId) => ({
  type: 'LOG_IN',
  user: {
    email,
    token,
    userId,
  },
});

const logout = () => ({
  type: 'LOG_OUT',
});

const logger = {
  login,
  logout,
};

export default logger;
