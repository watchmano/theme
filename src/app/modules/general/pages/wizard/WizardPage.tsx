/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from "react";
import { StepperComponent } from "../../../../../_start/assets/ts/components";
import { KTSVG } from "../../../../../_start/helpers";
import { IWizardData, defaultWizardData } from "./WizardModels";

export function WizardPage() {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const stepper = useRef<StepperComponent | null>(null);
  const [data, setData] = useState<IWizardData>(defaultWizardData);
  const [hasError, setHasError] = useState(false);

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(
      stepperRef.current as HTMLDivElement
    );
  };

  const updateData = (fieldsToUpdate: Partial<IWizardData>) => {
    const updatedData = { ...data, ...fieldsToUpdate };
    setData(updatedData);
  };

  const checkAccountSettings = (): boolean => {
    if (!data.accountSettings.companyName || !data.accountSettings.yourName) {
      return false;
    }
    return true;
  };

  const checkSetupLocation = (): boolean => {
    if (
      !data.setupLocation.addessLine ||
      !data.setupLocation.city ||
      !data.setupLocation.country
    ) {
      return false;
    }
    return true;
  };

  const prevStep = () => {
    if (!stepper.current) {
      return;
    }

    stepper.current.goPrev();
  };

  const nextStep = () => {
    setHasError(false);
    if (!stepper.current) {
      return;
    }

    if (stepper.current.getCurrentStepIndex() === 1) {
      if (!checkAccountSettings()) {
        setHasError(true);
        return;
      }
    }

    if (stepper.current.getCurrentStepIndex() === 2) {
      if (!checkSetupLocation()) {
        setHasError(true);
        return;
      }
    }

    stepper.current.goNext();
  };

  const submit = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (!stepperRef.current) {
      return;
    }

    loadStepper();
  }, [stepperRef]);

  return (
    <div className="card card-custom">
      {/* begin::Card Body */}
      <div className="card-body p-10 p-lg-15 p-xxl-30">
        {/* begin::Stepper 1 */}
        <div
          ref={stepperRef}
          className="stepper stepper-1  d-flex flex-column flex-xl-row flex-row-fluid"
          id="kt_stepper"
        >
          {/* begin::Aside */}
          <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px">
            {/* begin::Nav */}
            <div className="stepper-nav d-flex flex-column py-15">
              {/* begin::Step 1 */}
              <div
                className="stepper-item current"
                data-kt-stepper-element="nav"
              >
                <div className="stepper-wrapper">
                  <div className="stepper-icon">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">1</span>
                  </div>
                  <div className="stepper-label">
                    <h3 className="stepper-title">Account Settings</h3>
                    <div className="stepper-desc">
                      Setup Your Account Details
                    </div>
                  </div>
                </div>
              </div>
              {/* end::Step 1 */}

              {/* begin::Step 2 */}
              <div className="stepper-item" data-kt-stepper-element="nav">
                <div className="stepper-wrapper">
                  <div className="stepper-icon">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">2</span>
                  </div>
                  <div className="stepper-label">
                    <h3 className="stepper-title">Setup Location</h3>
                    <div className="stepper-desc">Setup Residence Address</div>
                  </div>
                </div>
              </div>
              {/* end::Step 2 */}

              {/* begin::Step 3 */}
              <div className="stepper-item" data-kt-stepper-element="nav">
                <div className="stepper-wrapper">
                  <div className="stepper-icon">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">3</span>
                  </div>
                  <div className="stepper-label">
                    <h3 className="stepper-title">Support Channels</h3>
                    <div className="stepper-desc">Add Your Support Agents</div>
                  </div>
                </div>
              </div>
              {/* end::Step 3 */}

              {/* begin::Step 4 */}
              <div className="stepper-item" data-kt-stepper-element="nav">
                <div className="stepper-wrapper">
                  <div className="stepper-icon">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">4</span>
                  </div>
                  <div className="stepper-label">
                    <h3 className="stepper-title">Make Payment</h3>
                    <div className="stepper-desc">Use Debit or Credit Card</div>
                  </div>
                </div>
              </div>
              {/* end::Step 4 */}

              {/* begin::Step 5 */}
              <div className="stepper-item" data-kt-stepper-element="nav">
                <div className="stepper-wrapper">
                  <div className="stepper-icon">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">5</span>
                  </div>
                  <div className="stepper-label">
                    <h3 className="stepper-title">Completed!</h3>
                    <div className="stepper-desc">Review and Submit</div>
                  </div>
                </div>
              </div>
              {/* end::Step 5 */}
            </div>
            {/* end::Nav */}
          </div>
          {/* begin::Aside */}

          {/* begin::Content */}
          <div className="d-flex flex-row-fluid justify-content-center">
            {/* begin::Form */}
            <form
              className="pt-10 w-100 w-md-400px w-xl-500px"
              noValidate
              id="kt_stepper_form"
            >
              {/* begin::Step 1 */}
              <div className="current" data-kt-stepper-element="content">
                <div className="w-100">
                  {/* begin::Heading */}
                  <div className="pb-10 pb-lg-15">
                    <h3 className="fw-bolder text-dark display-6">
                      Account Settings
                    </h3>
                    <div className="text-muted fw-bold fs-3">
                      Having Issues?{" "}
                      <a href="#" className="text-primary fw-bolder">
                        Get Help
                      </a>
                    </div>
                  </div>
                  {/* begin::Heading */}

                  {/* begin::Form Group */}
                  <div className="fv-row mb-10">
                    <label className="fs-6 form-label fw-bolder text-dark">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid "
                      name="comnpanyname"
                      placeholder=""
                      value={data.accountSettings.companyName}
                      onChange={(e) =>
                        updateData({
                          accountSettings: {
                            ...data.accountSettings,
                            companyName: e.target.value,
                          },
                        })
                      }
                    />
                    {!data.accountSettings.companyName && hasError && (
                      <div className="fv-plugins-message-container">
                        <div
                          data-field="comnpanyname"
                          data-validator="notEmpty"
                          className="fv-help-block"
                        >
                          Company name is required
                        </div>
                      </div>
                    )}
                  </div>
                  {/* end::Form Group */}

                  {/* begin::Form Group */}
                  <div className="fv-row mb-10">
                    <label className="fs-6 form-label  fw-bolder text-dark">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid "
                      name="yourname"
                      placeholder=""
                      value={data.accountSettings.yourName}
                      onChange={(e) =>
                        updateData({
                          accountSettings: {
                            ...data.accountSettings,
                            yourName: e.target.value,
                          },
                        })
                      }
                    />
                    {!data.accountSettings.yourName && hasError && (
                      <div className="fv-plugins-message-container">
                        <div
                          data-field="yourname"
                          data-validator="notEmpty"
                          className="fv-help-block"
                        >
                          Your name is required
                        </div>
                      </div>
                    )}
                  </div>
                  {/* end::Form Group */}
                </div>
              </div>
              {/* end::Step 1 */}

              {/* begin::Step 2 */}
              <div className="" data-kt-stepper-element="content">
                <div className="w-100">
                  {/* begin::Heading */}
                  <div className="pb-10 pb-lg-15">
                    <h3 className="fw-bolder text-dark display-6">
                      Address Details
                    </h3>
                    <div className="text-muted fw-bold fs-3">
                      Having Issues?{" "}
                      <a href="#" className="text-primary fw-bolder">
                        Get Help
                      </a>
                    </div>
                  </div>
                  {/* end::Heading */}

                  {/* begin::Form Group */}
                  <div className="fv-row mb-10">
                    <label className="fs-6 form-label fw-bolder text-dark">
                      Address Line
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid "
                      name="address1"
                      placeholder=""
                      value={data.setupLocation.addessLine}
                      onChange={(e) =>
                        updateData({
                          setupLocation: {
                            ...data.setupLocation,
                            addessLine: e.target.value,
                          },
                        })
                      }
                    />
                    {!data.setupLocation.addessLine && hasError && (
                      <div className="fv-plugins-message-container">
                        <div
                          data-field="address1"
                          data-validator="notEmpty"
                          className="fv-help-block"
                        >
                          Address Line is required
                        </div>
                      </div>
                    )}
                  </div>
                  {/* begin::Form Group */}

                  {/* end::Row */}
                  <div className="fv-row row">
                    <div className="col-lg-6 col-md-6">
                      {/* end::Form Group */}
                      <div className="">
                        <label className="fs-6 form-label  fw-bolder text-dark">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-solid "
                          name="city"
                          placeholder=""
                          value={data.setupLocation.city}
                          onChange={(e) =>
                            updateData({
                              setupLocation: {
                                ...data.setupLocation,
                                city: e.target.value,
                              },
                            })
                          }
                        />
                        {!data.setupLocation.city && hasError && (
                          <div className="fv-plugins-message-container">
                            <div
                              data-field="city"
                              data-validator="notEmpty"
                              className="fv-help-block"
                            >
                              City is required
                            </div>
                          </div>
                        )}
                      </div>
                      {/* begin::Form Group */}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {/* end::Form Group */}
                      <div className="">
                        <label className="fs-6 form-label fw-bolder text-dark">
                          Country
                        </label>
                        <select
                          className="form-select form-select-lg form-select-solid"
                          name="country"
                          value={data.setupLocation.country}
                          onChange={(e) =>
                            updateData({
                              setupLocation: {
                                ...data.setupLocation,
                                country: e.target.value,
                              },
                            })
                          }
                        >
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">
                            Bolivia, Plurinational State of
                          </option>
                          <option value="BQ">
                            Bonaire, Sint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CD">
                            Congo, the Democratic Republic of the
                          </option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Côte d'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="VA">
                            Holy See (Vatican City State)
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran, Islamic Republic of</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KP">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="KR">Korea, Republic of</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">
                            Lao People's Democratic Republic
                          </option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MK">
                            Macedonia, the former Yugoslav Republic of
                          </option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">
                            Micronesia, Federated States of
                          </option>
                          <option value="MD">Moldova, Republic of</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">
                            Palestinian Territory, Occupied
                          </option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Réunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">
                            Saint Helena, Ascension and Tristan da Cunha
                          </option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten (Dutch part)</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">
                            Tanzania, United Republic of
                          </option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UM">
                            United States Minor Outlying Islands
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">
                            Venezuela, Bolivarian Republic of
                          </option>
                          <option value="VN">Viet Nam</option>
                          <option value="VG">Virgin Islands, British</option>
                          <option value="VI">Virgin Islands, U.S.</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                      {/* end::Form Group */}
                    </div>
                  </div>
                  {/* begin::Row */}
                </div>
              </div>
              {/* end::Step 2 */}

              {/* begin::Step 3 */}
              <div className="" data-kt-stepper-element="content">
                <div className="w-100">
                  {/* begin::Heading */}
                  <div className="pb-10 pb-lg-15">
                    <h3 className="fw-bolder text-dark display-6">
                      Support Channel
                    </h3>
                    <div className="text-muted fw-bold fs-3">
                      Can't find your channel?
                      <a href="#" className="text-primary fw-bolder">
                        Get Help
                      </a>
                    </div>
                  </div>
                  {/* begin::Heading */}

                  <div className="row">
                    <div className="col-xl-6">
                      {/* begin::Form Group */}
                      <div className="mb-10">
                        <label className="fs-6 form-label fw-bolder text-dark">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-solid "
                          name="channelname"
                          placeholder=""
                          value={data.supportChannel.name}
                          onChange={(e) =>
                            updateData({
                              supportChannel: {
                                ...data.supportChannel,
                                name: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      {/* end::Form Group */}
                    </div>
                    <div className="col-xl-6">
                      {/* begin::Form Group */}
                      <div className="mb-10">
                        <label className="fs-6 form-label fw-bolder text-dark">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg form-control-solid "
                          name="channelemail"
                          placeholder=""
                          value={data.supportChannel.email}
                          onChange={(e) =>
                            updateData({
                              supportChannel: {
                                ...data.supportChannel,
                                email: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      {/* end::Form Group */}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6">
                      {/* begin::Form Group */}
                      <div className="mb-10">
                        <label className="fs-6 form-label fw-bolder text-dark">
                          Phone
                        </label>
                        <input
                          className="form-control form-control-lg form-control-solid "
                          name="channelphone"
                          placeholder=""
                          value={data.supportChannel.phone}
                          onChange={(e) =>
                            updateData({
                              supportChannel: {
                                ...data.supportChannel,
                                phone: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      {/* end::Form Group */}
                    </div>
                    <div className="col-xl-6">
                      {/* begin::Form Group */}
                      <div className="mb-10">
                        <label className="fs-6 form-label fw-bolder text-dark">
                          Website
                        </label>
                        <input
                          className="form-control form-control-lg form-control-solid "
                          name="channelwebsite"
                          placeholder=""
                          value={data.supportChannel.website}
                          onChange={(e) =>
                            updateData({
                              supportChannel: {
                                ...data.supportChannel,
                                website: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      {/* end::Form Group */}
                    </div>
                  </div>
                </div>
              </div>
              {/* end::Step 3 */}

              {/* begin::Step 4 */}
              <div className="" data-kt-stepper-element="content">
                <div className="w-100">
                  {/* begin::Heading */}
                  <div className="pb-10 pb-lg-15">
                    <h3 className="fw-bolder text-dark display-6">
                      Payment Settings
                    </h3>
                    <div className="text-muted fw-bold fs-3">
                      Having Issues?{" "}
                      <a href="#" className="text-primary fw-bolder">
                        Get Help
                      </a>
                    </div>
                  </div>
                  {/* begin::Heading */}

                  <div className="row">
                    <div className="col-xl-6">
                      {/* begin::Input */}
                      <div className="mb-10">
                        <label className="fs-6 form-label  fw-bolder text-dark form-label">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-solid "
                          name="ccname"
                          placeholder="Card Name"
                          value={data.paymentSettings.nameOnCard}
                          onChange={(e) =>
                            updateData({
                              paymentSettings: {
                                ...data.paymentSettings,
                                nameOnCard: e.target.value,
                              },
                            })
                          }
                        />
                        <span className="form-text text-muted">
                          Please enter your Card Name.
                        </span>
                      </div>
                      {/* end::Input */}
                    </div>
                    <div className="col-xl-6">
                      {/* begin::Input */}
                      <div className="mb-10">
                        <label className="fs-6 form-label  fw-bolder text-dark form-label">
                          Card Number
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-solid "
                          name="ccnumber"
                          placeholder="Card Number"
                          value={data.paymentSettings.cardNumber}
                          onChange={(e) =>
                            updateData({
                              paymentSettings: {
                                ...data.paymentSettings,
                                cardNumber: e.target.value,
                              },
                            })
                          }
                        />
                        <span className="form-text text-muted">
                          Please enter your Address.
                        </span>
                      </div>
                      {/* end::Input */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4">
                      {/* begin::Input */}
                      <div className="mb-10">
                        <label className="fs-6 form-label  fw-bolder text-dark form-label">
                          Card Expiry Month
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-lg form-control-solid "
                          name="ccmonth"
                          placeholder="Card Expiry Month"
                          value={data.paymentSettings.cardExpiryMonth}
                          onChange={(e) =>
                            updateData({
                              paymentSettings: {
                                ...data.paymentSettings,
                                cardExpiryMonth: e.target.value,
                              },
                            })
                          }
                        />
                        <span className="form-text text-muted">
                          Please enter your Card Expiry Month.
                        </span>
                      </div>
                      {/* end::Input */}
                    </div>
                    <div className="col-xl-4">
                      {/* begin::Input */}
                      <div className="mb-10">
                        <label className="fs-6 form-label  fw-bolder text-dark form-label">
                          Card Expiry Year
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-lg form-control-solid "
                          name="ccyear"
                          placeholder="Card Expire Year"
                          value={data.paymentSettings.cardExpiryYear}
                          onChange={(e) =>
                            updateData({
                              paymentSettings: {
                                ...data.paymentSettings,
                                cardExpiryYear: e.target.value,
                              },
                            })
                          }
                        />
                        <span className="form-text text-muted">
                          Please enter your Card Expiry Year.
                        </span>
                      </div>
                      {/* end::Input */}
                    </div>
                    <div className="col-xl-4">
                      {/* begin::Input */}
                      <div className="mb-10">
                        <label className="fs-6 form-label  fw-bolder text-dark form-label">
                          Card CVV Number
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg form-control-solid "
                          name="cccvv"
                          placeholder="Card CVV Number"
                          value={data.paymentSettings.cardCVVNumber}
                          onChange={(e) =>
                            updateData({
                              paymentSettings: {
                                ...data.paymentSettings,
                                cardCVVNumber: e.target.value,
                              },
                            })
                          }
                        />
                        <span className="form-text text-muted">
                          Please enter your Card CVV Number.
                        </span>
                      </div>
                      {/* end::Input */}
                    </div>
                  </div>
                </div>
              </div>
              {/* end::Step 4 */}

              {/* begin::Step 5 */}
              <div className="" data-kt-stepper-element="content">
                <div className="w-100">
                  {/* begin::Heading */}
                  <div className="pb-10 pb-lg-15">
                    <h3 className="fw-bolder text-dark display-6">Complete</h3>
                    <div className="text-muted fw-bold fs-3">
                      Complete Your Signup And Become A Member!
                    </div>
                  </div>
                  {/* end::Heading */}

                  {/* begin::Section */}
                  <h4 className="fw-bolder mb-3">Accoun Settings:</h4>
                  <div className="text-gray-600 fw-bold lh-lg mb-8">
                    <div>{data.accountSettings.yourName}</div>
                    <div>{data.accountSettings.companyName}</div>
                  </div>
                  {/* end::Section */}

                  {/* begin::Section */}
                  <h4 className="fw-bolder mb-3">Address Details:</h4>
                  <div className="text-gray-600 fw-bold lh-lg mb-8">
                    <div>{data.setupLocation.country}</div>
                    <div>{data.setupLocation.city}</div>
                    <div>{data.setupLocation.addessLine}</div>
                  </div>
                  {/* end::Section */}

                  {/* begin::Section */}
                  <h4 className="fw-bolder mb-3">Support Channels:</h4>
                  <div className="text-gray-600 fw-bold lh-lg mb-8">
                    <div>{data.supportChannel.name}</div>
                    <div>Email: {data.supportChannel.email}</div>
                    <div>Phone: {data.supportChannel.phone}</div>
                    <div>Website: {data.supportChannel.website}</div>
                  </div>
                  {/* end::Section */}
                </div>
              </div>
              {/* end::Step 5 */}

              {/* begin::Actions */}
              <div className="d-flex justify-content-between pt-10">
                <div className="mr-2">
                  <button
                    type="button"
                    className="btn btn-lg btn-light-primary fw-bolder py-4 pe-8 me-3"
                    data-kt-stepper-action="previous"
                    onClick={prevStep}
                  >
                    <KTSVG
                      path="/media/icons/duotone/Navigation/Left-2.svg"
                      className="svg-icon-4 me-1"
                    />
                    Previous
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                    data-kt-stepper-action="submit"
                    onClick={submit}
                  >
                    Submit
                    <KTSVG
                      path="/media/icons/duotone/Navigation/Right-2.svg"
                      className="svg-icon-4 ms-2"
                    />
                  </button>

                  <button
                    type="button"
                    className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                    data-kt-stepper-action="next"
                    onClick={nextStep}
                  >
                    Next Step
                    <KTSVG
                      path="/media/icons/duotone/Navigation/Right-2.svg"
                      className="svg-icon-4 ms-1"
                    />
                  </button>
                </div>
              </div>
              {/* end::Actions */}
            </form>
            {/* end::Form */}
          </div>
          {/* end::Content */}
        </div>
        {/* end::Stepper 1 */}
      </div>
      {/* end::Card Body */}
    </div>
  );
}
