import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./education"
import Projects from "./projects"
import Skills from "./skills"
import Contact from "./contact"

export function Hero() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="education">
        <Education/>
      </TabsContent>
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      <TabsContent value="contact">
        <Contact />
      </TabsContent>
    </Tabs>
  )
}
