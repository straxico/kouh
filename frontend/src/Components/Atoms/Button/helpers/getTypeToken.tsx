import { TOKENS, TYPE_OPTIONS } from '../consts';

const getTypeToken: GetTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.backgroundButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.backgroundButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.jajiga.backgroundButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.backgroundButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.backgroundButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.backgroundButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.backgroundButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.backgroundButtonGoogle,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.backgroundButtonWhite,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.backgroundButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.backgroundButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.jajiga.backgroundButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.backgroundButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.backgroundButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.backgroundButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.backgroundButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.backgroundButtonGoogleHover,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.backgroundButtonWhiteHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.backgroundButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.backgroundButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.jajiga.backgroundButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.backgroundButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.backgroundButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.backgroundButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.backgroundButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.backgroundButtonGoogleActive,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.backgroundButtonWhiteActive,
    },
    // skm: new
    [TOKENS.backgroundButtonActiveShadow]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.backgroundButtonPrimaryActiveShadow,
    },
    [TOKENS.backgroundButtonBordered]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.backgroundButtonBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.backgroundButtonBordered,
      [TYPE_OPTIONS.INFO]: theme.jajiga.backgroundButtonBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.backgroundButtonBordered,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.backgroundButtonBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.backgroundButtonBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.backgroundButtonBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.backgroundButtonBordered,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.backgroundButtonWhiteBordered,
    },
    [TOKENS.backgroundButtonBorderedHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.jajiga.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.backgroundButtonWhiteBorderedHover,
    },
    [TOKENS.backgroundButtonBorderedActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.jajiga.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.backgroundButtonWhiteBorderedActive,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.colorTextButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.colorTextButtonGoogle,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.colorTextButtonWhite,
    },
    [TOKENS.colorTextButtonBordered]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.colorTextButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.colorTextButtonGoogleBordered,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.colorTextButtonWhiteBordered,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.colorTextButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.colorTextButtonGoogleHover,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.colorTextButtonWhiteHover,
    },
    [TOKENS.colorTextButtonBorderedHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.colorTextButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.colorTextButtonGoogleBorderedHover,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.colorTextButtonWhiteBorderedHover,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.colorTextButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.colorTextButtonGoogleActive,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.colorTextButtonWhiteActive,
    },
    [TOKENS.colorTextButtonBorderedActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.colorTextButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.colorTextButtonGoogleBorderedActive,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.colorTextButtonWhiteBorderedActive,
    },
    [TOKENS.borderColorButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.borderColorButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.borderColorButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.jajiga.borderColorButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.borderColorButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.borderColorButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.borderColorButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.borderColorButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.borderColorButtonGoogleBordered,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.borderColorButtonWhiteBordered,
    },
    [TOKENS.borderColorButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.borderColorButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.borderColorButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.jajiga.borderColorButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.borderColorButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.borderColorButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.borderColorButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.borderColorButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.borderColorButtonGoogleBorderedHover,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.borderColorButtonWhiteBorderedHover,
    },
    [TOKENS.borderColorButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.jajiga.borderColorButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.jajiga.borderColorButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.jajiga.borderColorButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.borderColorButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.borderColorButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.borderColorButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.jajiga.borderColorButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.jajiga.borderColorButtonGoogleBorderedActive,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.borderColorButtonWhiteBorderedActive,
    },
  };
  return tokens[name][type];
};

export default getTypeToken;
