import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Star, 
  Package,
  Leaf,
  Heart,
  Sparkles
} from "lucide-react";
import detoxTeaImage from "@/assets/detox-tea-collection.jpg";
import supplementsImage from "@/assets/wellness-supplements.jpg";
import essentialOilsImage from "@/assets/essential-oils.jpg";
import skincareKitImage from "@/assets/detox-skincare-kit.jpg";
import wellnessBooksImage from "@/assets/wellness-books.jpg";
import homeDetoxKitImage from "@/assets/home-detox-kit.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Organic Detox Tea Collection",
      description: "Premium blend of organic herbs including chamomile, ginger, and green tea for daily detox support.",
      price: "$49.99",
      originalPrice: "$59.99",
      rating: 4.8,
      reviews: 127,
      image: detoxTeaImage,
      category: "Teas & Beverages",
      bestseller: true
    },
    {
      id: 2,
      title: "Premium Wellness Supplements",
      description: "Complete vitamin and mineral complex with probiotics to support your detox journey.",
      price: "$89.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 203,
      image: supplementsImage,
      category: "Supplements",
      bestseller: false
    },
    {
      id: 3,
      title: "Essential Oils Aromatherapy Set",
      description: "Pure essential oils including lavender, eucalyptus, and tea tree for relaxation and wellness.",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.7,
      reviews: 89,
      image: essentialOilsImage,
      category: "Aromatherapy",
      bestseller: false
    },
    {
      id: 4,
      title: "Natural Detox Skincare Kit",
      description: "Complete skincare routine with organic cleansers, scrubs, and moisturizers for glowing skin.",
      price: "$129.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      image: skincareKitImage,
      category: "Skincare",
      bestseller: true
    },
    {
      id: 5,
      title: "Wellness & Detox Guidebooks",
      description: "Expert-written guides on detoxification, healthy living, and mindfulness practices.",
      price: "$34.99",
      originalPrice: "$44.99",
      rating: 4.6,
      reviews: 78,
      image: wellnessBooksImage,
      category: "Books & Guides",
      bestseller: false
    },
    {
      id: 6,
      title: "Complete Home Detox Kit",
      description: "Everything you need for a 7-day home detox program including teas, supplements, and guides.",
      price: "$199.99",
      originalPrice: "$249.99",
      rating: 4.8,
      reviews: 234,
      image: homeDetoxKitImage,
      category: "Detox Kits",
      bestseller: true
    }
  ];

  const categories = ["All Products", "Teas & Beverages", "Supplements", "Aromatherapy", "Skincare", "Books & Guides", "Detox Kits"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Package className="w-4 h-4 mr-2" />
              Wellness Products
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Premium Wellness
              <span className="block text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Enhance your wellness journey with our carefully curated collection of 
              organic products, supplements, and detox essentials.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="card-shadow hover:scale-105 transition-spring overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.bestseller && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Bestseller
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge variant="destructive">
                        Save ${(parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))).toFixed(2)}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 wellness-gradient rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">100% Organic</h3>
              <p className="text-muted-foreground">All our products are certified organic and sourced from trusted suppliers.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 wellness-gradient rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Expert Approved</h3>
              <p className="text-muted-foreground">Recommended by wellness experts and health professionals.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 wellness-gradient rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">Only the finest ingredients and materials in every product.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;