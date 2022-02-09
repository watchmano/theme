export interface IAccountSettings {
  companyName: string;
  yourName: string;
}

export interface ISetupLocation {
  addessLine: string;
  city: string;
  country: string;
}

export interface ISupportChannels {
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface IPaymentSettings {
  nameOnCard: string;
  cardNumber: string;
  cardExpiryMonth: string;
  cardExpiryYear: string;
  cardCVVNumber: string;
}

export interface IWizardData {
  accountSettings: IAccountSettings;
  setupLocation: ISetupLocation;
  supportChannel: ISupportChannels;
  paymentSettings: IPaymentSettings;
}

export const defaultWizardData: IWizardData = {
  accountSettings: { companyName: "My company GMBH", yourName: "Ja Morant" },
  setupLocation: {
    addessLine: "4857  Garfield Road",
    city: "Hudson",
    country: "US",
  },
  supportChannel: {
    name: "Channel 7",
    email: "support@channel7.com",
    phone: "+12233434-34",
    website: "channel7.com",
  },
  paymentSettings: {
    nameOnCard: "Nick Stone",
    cardNumber: "4444 3333 2222 1111",
    cardExpiryMonth: "10",
    cardExpiryYear: "21",
    cardCVVNumber: "011",
  },
};
