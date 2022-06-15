import gql from "graphql-tag";

export const Query = {
  GET_ALL_PACKAGE: gql`
    query getAllPackages {
      getAllPackages {
        _id
        packageType
        orderType
        description
        originalPrice
        rushDeliveryCharges
        price
        discount
        originalPrice
        slug
      }
    }
  `,
  GET_ORDER_BY_ORDER_ID: gql`
    query getOrderByOrderId($orderId: String) {
      getOrderByOrderId(orderId: $orderId) {
        _id
        packageType
        orderType
        status
        payedAt
        amount
        paymentStatus
        orderStatus
        packageId {
          _id
          packageType
          orderType
          rushDeliveryCharges
          price
          discount
          originalPrice
        }
        userId {
          _id
        }
      }
    }
  `,
  GET_ALL_ORDERS_OF_LOGGEDIN_USER: gql`
    query getAllOrdersByUserId {
      getAllOrdersByUserId {
        _id
        packageType
        orderType
        error
        rushDelivery
        data
        status
        orderNo
        createdAt
        payedAt
        amount
        paymentStatus
        orderStatus
        rushDeliveryCharges
        couponDiscount
        packageAmount
        userId {
          _id
          firstName
          lastName
          email
          phoneNo
        }
        orderDetails {
          logoType
          tagLine
          description
          restrictedThings
          colors
          logoDesignTypes
          exactWords
        }
        packageId {
          _id
          packageType
          orderType
          rushDeliveryCharges
          price
          discount
          originalPrice
        }
        couponId {
          _id
          code
          discount
          description
          couponType
          createdAt
          startedAt
          expiredAt
          allowCounter
          status
          allowEveryUser
          pictureURL
        }
      }
    }
  `,
  GET_ALL_COUPONS_OF_USERS: gql`
    query getAllCouponsByUser {
      getAllCouponsByUser {
        _id
        code
        discount
        description
        couponType
        createdAt
        startedAt
        expiredAt
        allowCounter
        status
        allowEveryUser
        pictureURL
        usedByUser
      }
    }
  `,

  GET_PACKAGE_BY_SLUG: gql`
    query getPackageBySlug($slugName: String) {
      getPackageBySlug(slugName: $slugName) {
        _id
        packageType
        orderType
        description
        originalPrice
        rushDeliveryCharges
        price
        discount
        originalPrice
        slug
      }
    }
  `,
};
