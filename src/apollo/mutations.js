import gql from "graphql-tag";
export const Mutation = {
  CONTACT_US: gql`
    mutation contact_us(
      $name: String
      $email: String
      $phone: String
      $projectType: String
      $description: String
    ) {
      contactUs(
        name: $name
        email: $email
        phone: $phone
        projectType: $projectType
        description: $description
      ) {
        _id
        name
      }
    }
  `,
  LOGIN_USER: gql`
    mutation loginUser($email: String, $password: String, $deviceId: String) {
      loginUser(email: $email, password: $password, deviceId: $deviceId) {
        _id
        firstName
        lastName
        email
        address
        phoneNo
        jwtToken {
          token
        }
        city
        state
        country
        zipCode
      }
    }
  `,
  LOGOUT_USER: gql`
    mutation logout($deviceId: String!) {
      logout(deviceId: $deviceId) {
        _id
      }
    }
  `,
  SIGN_UP_USER: gql`
    mutation signupUser(
      $firstName: String
      $lastName: String
      $email: String
      $phoneNo: String
      $deviceId: String
      $packageId: String
    ) {
      signupUser(
        firstName: $firstName
        lastName: $lastName
        email: $email
        phoneNo: $phoneNo
        deviceId: $deviceId
        packageId: $packageId
      ) {
        _id
        firstName
        lastName
        email
        address
        phoneNo
        jwtToken {
          token
        }
        city
        state
        country
        zipCode
      }
    }
  `,
  SIGN_UP_WITHOUT_PASSWORD: gql`
    mutation signupUser(
      $firstName: String
      $lastName: String
      $email: String
      $phoneNo: String
      $deviceId: String
    ) {
      signupUser(
        firstName: $firstName
        lastName: $lastName
        email: $email
        phoneNo: $phoneNo
        deviceId: $deviceId
      ) {
        _id
        firstName
        lastName
        email
        address
        phoneNo
        jwtToken {
          token
        }
        city
        state
        country
        zipCode
      }
    }
  `,
  FORGOT_PASSWORD: gql`
    mutation resetPassword($email: String!) {
      resetPassword(email: $email) {
        _id
      }
    }
  `,
  UPDATE_PASSWORD: gql`
    mutation updatePassword(
      $email: String!
      $code: String!
      $newPassword: String!
      $reenterPassword: String!
      $deviceId: String!
    ) {
      updatePassword(
        email: $email
        code: $code
        newPassword: $newPassword
        reenterPassword: $reenterPassword
        deviceId: $deviceId
      ) {
        _id
        firstName
        lastName
        email
        address
        phoneNo
        jwtToken {
          token
        }
      }
    }
  `,
  ORDER_DETAILS: gql`
    mutation paymentDetails(
      $address: String
      $country: String
      $zipCode: String
      $state: String
      $city: String
      $paymentToken: String
      $total: String
      $packageType: Float
      $orderType: Float
      $orderId: String
      $couponId: String
      $time: String
      $orderName: String
      $rushDelivery: Boolean
      $rushDeliveryCharges: Float
      $couponDiscount: Float
      $packageAmount: Float
    ) {
      paymentDetails(
        address: $address
        country: $country
        zipCode: $zipCode
        state: $state
        city: $city
        paymentToken: $paymentToken
        total: $total
        packageType: $packageType
        orderType: $orderType
        orderId: $orderId
        couponId: $couponId
        time: $time
        orderName: $orderName
        rushDelivery: $rushDelivery
        rushDeliveryCharges: $rushDeliveryCharges
        couponDiscount: $couponDiscount
        packageAmount: $packageAmount
      ) {
        error
        data
      }
    }
  `,
  LOGO_DESIGN_STEP_2: gql`
    mutation logoDesignStep2(
      $packageType: Float
      $orderType: Float
      $amount: Float
      $logoType: String
      $exactWords: String
      $tagLine: String
      $description: String
      $packageId: String
      $fileString: String
      $fileExtension: String
      $orderId: String
    ) {
      logoDesignStep2(
        packageType: $packageType
        orderType: $orderType
        amount: $amount
        logoType: $logoType
        exactWords: $exactWords
        tagLine: $tagLine
        description: $description
        packageId: $packageId
        fileString: $fileString
        fileExtension: $fileExtension
        orderId: $orderId
      ) {
        _id
        orderDetails {
          filePath
        }
      }
    }
  `,
  LOGO_DESIGN_STEP_3: gql`
    mutation logoDesignStep3(
      $orderId: String
      $logoDesignTypes: [String]
      $colors: [String]
      $restrictedThings: String
    ) {
      logoDesignStep3(
        orderId: $orderId
        logoDesignTypes: $logoDesignTypes
        colors: $colors
        restrictedThings: $restrictedThings
      ) {
        _id
      }
    }
  `,
  APPLY_COUPON: gql`
    mutation applyCoupon($couponCode: String, $amount: Float, $userId: String) {
      applyCoupon(couponCode: $couponCode, amount: $amount, userId: $userId) {
        _id
        discount
      }
    }
  `,
  UPDATE_USER_PROFILE: gql`
    mutation updateUserProfile(
      $firstName: String
      $lastName: String
      $phoneNo: String
      $address: String
      $country: String
      $state: String
      $city: String
      $zipCode: String
    ) {
      updateUserProfile(
        firstName: $firstName
        lastName: $lastName
        phoneNo: $phoneNo
        address: $address
        country: $country
        state: $state
        city: $city
        zipCode: $zipCode
      ) {
        _id
        firstName
        lastName
        email
        address
        phoneNo
        zipCode
        state
        city
        country
      }
    }
  `,
  CHANGE_PASSWORD: gql`
    mutation changePassword($currentPassword: String, $newPassword: String) {
      changePassword(currentPassword: $currentPassword, newPassword: $newPassword) {
        _id
      }
    }
  `,
  CREATE_WEB_DESIGN_ORDER: gql`
    mutation webDesignForm(
      $packageId: String
      $userId: String
      $packageType: Float
      $orderType: Float
      $amount: Float
      $questions: [String]
      $answers: [String]
    ) {
      webDesignForm(
        packageId: $packageId
        userId: $userId
        packageType: $packageType
        orderType: $orderType
        amount: $amount
        questions: $questions
        answers: $answers
      ) {
        _id
      }
    }
  `,
};
