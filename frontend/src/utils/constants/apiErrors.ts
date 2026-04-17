export interface IServerErrorMessage {
  500: "Ошибка сервера";
}

export interface IUnauthorizedErrorMessages {
  429?: "Необходима авторизация для использования api";
  430?: "Невалидный токен";
}

export interface IAllErrorMessages
  extends IUnauthorizedErrorMessages, IServerErrorMessage {
  400?: string;
  404?: string;
}

// =====

export const STANDART_UNAUTHORIZED_ERROR_MESSAGES: IUnauthorizedErrorMessages =
  {
    "429": "Необходима авторизация для использования api",
    "430": "Невалидный токен",
  } as const;

export const STANDART_SERVER_ERROR_MESSAGE: IServerErrorMessage = {
  "500": "Ошибка сервера",
} as const;

// ======

export const REGISTER_USER_ERROR_MESSAGES: IAllErrorMessages = {
  ...STANDART_SERVER_ERROR_MESSAGE,
  "400": "Данный домен почт не поддерживается",
  "404": "Пользователь с такой почтой уже зарегистрирован",
};

export const GET_USER_DATA_ERROR_MESSAGES: IAllErrorMessages = {
  ...STANDART_UNAUTHORIZED_ERROR_MESSAGES,
  ...STANDART_SERVER_ERROR_MESSAGE,
} as const;
export const SET_AUTH_TOKEN_ERROR_MESSAGES: IAllErrorMessages = {
  ...STANDART_SERVER_ERROR_MESSAGE,
  "400": "Неверный пароль от аккаунта",
  "404": "Пользователь с такой почтой еще не зарегистрирован",
} as const;
