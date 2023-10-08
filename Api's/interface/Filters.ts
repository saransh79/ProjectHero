export interface Root {
    payload: Payload
  }
  
  export interface Payload {
    rootCategories: RootCategory[]
    primaryCategories: PrimaryCategory[]
    secondaryCategories: SecondaryCategory[]
  }
  
  export interface RootCategory {
    slug: string
    label: string
    nodeType: string
    description: any
    icon: string
  }
  
  export interface PrimaryCategory {
    slug: string
    label: string
    nodeType: string
    description: any
    icon?: string
  }
  
  export interface SecondaryCategory {
    slug: string
    label: string
    nodeType: string
    description: any
    icon?: string
  }
  