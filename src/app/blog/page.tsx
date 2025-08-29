'use client'
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useQuery } from '@tanstack/react-query'

const SOURCE_URL = "https://futureoffounders.com/wp-json/wp/v2/posts"

export default function BlogPage() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch(SOURCE_URL).then(res => res.json()),
  })
  console.log(data)

  const blogPosts = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      title: "Corem ipsum dolor",
      description:
        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: `/placeholder.svg?height=200&width=300&query=modern city skyline with green geometric shapes`,
    }))

  const featuredPosts = blogPosts.slice(0, 4)
  const allPosts = blogPosts.slice(4, 12)

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="text-center py-12">
        <p className="text-[#7c8b9d] text-lg mb-4">Gorem ipsum dolor sit amet</p>
        <div className="relative inline-block">
          <h1 className="text-5xl font-bold text-[#00ab80] mb-2">Blog</h1>
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#00ab80]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Search and Sort */}
        <div className="flex gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#666666] w-5 h-5" />
            <Input className="pl-12 bg-white text-black border-0 h-12 rounded-lg" placeholder="" />
          </div>
          <Button
            variant="outline"
            className="bg-[#d8dbe2] text-black border-0 h-12 px-6 rounded-lg hover:bg-[#d1d9e2]"
          >
            Sort By
            <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Featured Press Releases */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#5f6d7e] mb-8">Featured Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="bg-white text-black rounded-xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="City skyline with green geometric shapes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{post.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-4">{post.description}</p>
                  <button className="flex items-center text-[#00ab80] font-medium text-sm hover:underline">
                    Read Case Study
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Press Releases */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#5f6d7e] mb-8">All Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allPosts.map((post) => (
              <Card key={post.id} className="bg-white text-black rounded-xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="City skyline with green geometric shapes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{post.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-4">{post.description}</p>
                  <button className="flex items-center text-[#00ab80] font-medium text-sm hover:underline">
                    Read Case Study
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 pb-16">
          <Button variant="ghost" size="sm" className="text-[#7c8b9d] hover:text-white hover:bg-[#5f6d7e]">
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {[1, 2, 3, 4].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "ghost"}
              size="sm"
              className={
                page === 1
                  ? "bg-white text-black hover:bg-[#d8dbe2]"
                  : "text-[#7c8b9d] hover:text-white hover:bg-[#5f6d7e]"
              }
            >
              {page}
            </Button>
          ))}

          <Button variant="ghost" size="sm" className="text-[#7c8b9d] hover:text-white hover:bg-[#5f6d7e]">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
