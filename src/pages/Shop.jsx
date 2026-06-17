import React from 'react'
import ProductCard from '../components/Common/Productcard'

function Shop() {
  const products = [
    {
      id: 7869654630590,
      title: "90's Oval Platter Wood",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/LS-0128_1_copy.jpg?v=1756704597",
      originalPrice: 2856,
      discountedPrice: 1999,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8590256537790,
      title: "Abnor Wooden Swivel Bar Chair",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/Gemini_Generated_Image_3s7m43s7m43s7m43.jpg?v=1759503481",
      originalPrice: 28570,
      discountedPrice: 19999,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8120760893630,
      title: "Abstract Cushion Cover",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/S-5541-_1_ca3a5501-3835-4bfb-b63d-ae8a992ced14.jpg?v=1773809819",
      originalPrice: 1570,
      discountedPrice: 1099,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8672473514174,
      title: "Acquis Parawood 6 Seater Dining Table",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/LS-1080.jpg?v=1768651891",
      originalPrice: 89999,
      discountedPrice: 62999,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8824358699198,
      title: "Acquis x Antho Dining Setup- 4-Seater",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/AcquisParawood6SeaterDiningTable-4seater.jpg?v=1780643841",
      originalPrice: 143995,
      discountedPrice: 93597,
      discountPercent: 35,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },
    {
      id: 7869654630590,
      title: "90's Oval Platter Wood",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/LS-0128_1_copy.jpg?v=1756704597",
      originalPrice: 2856,
      discountedPrice: 1999,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8590256537790,
      title: "Abnor Wooden Swivel Bar Chair",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/Gemini_Generated_Image_3s7m43s7m43s7m43.jpg?v=1759503481",
      originalPrice: 28570,
      discountedPrice: 19999,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8120760893630,
      title: "Abstract Cushion Cover",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/S-5541-_1_ca3a5501-3835-4bfb-b63d-ae8a992ced14.jpg?v=1773809819",
      originalPrice: 1570,
      discountedPrice: 1099,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8672473514174,
      title: "Acquis Parawood 6 Seater Dining Table",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/LS-1080.jpg?v=1768651891",
      originalPrice: 89999,
      discountedPrice: 62999,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8824358699198,
      title: "Acquis x Antho Dining Setup- 4-Seater",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/AcquisParawood6SeaterDiningTable-4seater.jpg?v=1780643841",
      originalPrice: 143995,
      discountedPrice: 93597,
      discountPercent: 35,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },
    {
      id: 7869654630590,
      title: "90's Oval Platter Wood",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/LS-0128_1_copy.jpg?v=1756704597",
      originalPrice: 2856,
      discountedPrice: 1999,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8590256537790,
      title: "Abnor Wooden Swivel Bar Chair",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/Gemini_Generated_Image_3s7m43s7m43s7m43.jpg?v=1759503481",
      originalPrice: 28570,
      discountedPrice: 19999,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8120760893630,
      title: "Abstract Cushion Cover",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/S-5541-_1_ca3a5501-3835-4bfb-b63d-ae8a992ced14.jpg?v=1773809819",
      originalPrice: 1570,
      discountedPrice: 1099,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8672473514174,
      title: "Acquis Parawood 6 Seater Dining Table",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/LS-1080.jpg?v=1768651891",
      originalPrice: 89999,
      discountedPrice: 62999,
      discountPercent: 30,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    },

    {
      id: 8824358699198,
      title: "Acquis x Antho Dining Setup- 4-Seater",
      image: "https://cdn.shopify.com/s/files/1/0644/0710/9822/files/AcquisParawood6SeaterDiningTable-4seater.jpg?v=1780643841",
      originalPrice: 143995,
      discountedPrice: 93597,
      discountPercent: 35,
      badge: "Ready To Ship",
      extraOffer: {
        percent: 10,
        code: "EXTRA10"
      },
      prepaidOffer: {
        percent: 5,
        code: "PREPAID5"
      }
    }
  ];
  return (
    <div className='max-w-7xl mx-auto px-6 py-12' >
      <h2 className='text-3xl font-bold text-gray-900 mb-8'>Featured Products</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            discountPercent={product.discountPercent}
            badge={product.badge}
            extraOffer={product.extraOffer}
            prepaidOffer={product.prepaidOffer}
           
          />
        ))}
      </div>
    </div >
  )
}

export default Shop