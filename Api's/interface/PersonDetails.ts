export interface Root {
  payload: Payload
}

export interface Payload {
  personalDetails: PersonalDetails
  trustAndSafety: TrustAndSafety[]
  businessCardDetails: BusinessCardDetails
  primarySpecializations: PrimarySpecialization[]
}

export interface PersonalDetails {
  name?: string
  isVerified?: boolean
  isMember?: boolean
  phoneNumber?: string
  companyName?: string
  designation?: string
  city?: string
  state?: string
  about?: string
  email?: string
  profilePicture?: string;
  userType?: string
  userId?: string
  reviewsCount?: number
}

export interface TrustAndSafety {
  url: string
  key: string
  isVerified: boolean
}

export interface BusinessCardDetails {
  companyName?: string
  isVerified?: string
  gstCompanyName?: string
  organisationSpecializationDetails?: OrganisationSpecializationDetails
  companyType?: string
  turnover?: string
  financialYear?: string
  GSTIN?: number
}

export interface OrganisationSpecializationDetails {
  primarySpecialization?: string[]
  root?: string
  secondarySpecialization?: SecondarySpecialization
}

export interface SecondarySpecialization {
  "$*": any[]
  MASON: string[]
}

export interface PrimarySpecialization {
  slug?: string
  label?: string
  nodeType?: string
  description?: any
  icon?: string
  secondaryCategories?: string[]
}
