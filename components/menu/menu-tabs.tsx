'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MenuItemCard } from '@/components/menu-item-card'
import { menuCategories, menuItems } from '@/lib/restaurant'

export function MenuTabs() {
  return (
    <Tabs defaultValue="entrees" className="gap-0">
      <div className="sticky top-16 z-30 -mx-4 bg-background/90 px-4 py-4 backdrop-blur-md sm:mx-0 sm:px-0">
        <TabsList
          aria-label="Catégories du menu"
          className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-full bg-secondary p-1 sm:justify-center"
        >
          {menuCategories.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="h-10 flex-none rounded-full px-5 text-sm font-medium data-active:bg-primary data-active:text-primary-foreground data-active:shadow-sm sm:flex-1 sm:text-base"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {menuCategories.map((category) => {
        const items = menuItems.filter((item) => item.category === category.value)
        return (
          <TabsContent key={category.value} value={category.value} className="animate-in pt-8 duration-500 fade-in slide-in-from-bottom-2">
            <header className="mb-8 text-center">
              <h2 className="text-3xl font-medium sm:text-4xl">{category.label}</h2>
              <p className="mt-2 text-muted-foreground">{category.intro}</p>
            </header>
            <ul className="grid gap-2 md:grid-cols-2 md:gap-x-8">
              {items.map((item) => (
                <li key={item.id}>
                  <MenuItemCard item={item} />
                </li>
              ))}
            </ul>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
