import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="flex flex-col items-center space-y-8 pb-20 pt-4">
      <Card className="w-full max-w-lg">
        <CardTitle className="p-6">
          <Typography variant="h2" underline>
            📫 Let&apos;s Connect
          </Typography>
        </CardTitle>
        <CardContent className="flex flex-col items-center space-y-6 text-center">
          <p className="text-lg text-muted-foreground">
            Feel free to reach out if you have any questions or just want to say hi!
          </p>
          <p className="text-lg text-primary font-semibold">I look forward to hearing from you! 😊</p>

          <Button asChild>
            <a href="https://link.pandhuarya.my.id" target="_blank" rel="noopener noreferrer">
              Get In Touch
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
