import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import SEO from "@/components/SEO.tsx";
import EmailButton from "@/components/Common/EmailButton.tsx";
import CallButton from "@/components/Common/CallButton.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import SubscribeCard from "@/components/Common/SubscribeCard.tsx";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch(form.action, {
      method: form.method,
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      form.reset();
      setSuccess(true);
    }
  }

  return (
    <>
      <SEO
        title={"Contact"}
      />
      <div className="space-y-6">
        <ContainerTitle
          title={"Contact"}
        />

        <h2>
          {"If you're building in / excited about AI or just wanna chat, let's connect."}
        </h2>

        <div
          className="flex space-x-4"
        >
          <CallButton variant={"secondary"}/>
          <EmailButton/>
        </div>
        <div
          className="space-y-3"
        >
          {
            success ? (
              <>
                <h3
                  className="text-xl font-bold text-white"
                >
                  {"Thanks for reaching out!"}
                </h3>
                <p>
                  {"I'll get back to you as soon as possible."}
                </p>
              </>
            ) : (
              <>
                <h3
                  className="text-xl font-bold text-white"
                >
                  Send a message
                </h3>
                <form
                  action="https://formspree.io/f/mwpepkyp"
                  className="space-y-4"
                  method="POST"
                  onSubmit={onSubmit}
                >
                  <div
                    className="grid grid-cols-2 gap-3"
                  >
                    <div>
                      <Input
                        className="border-none bg-slate"
                        type="text"
                        placeholder="Name"
                        required={true}
                        name={"name"}
                      />
                    </div>
                    <div>
                      <Input
                        className="border-none bg-slate"
                        type="email"
                        placeholder="Email"
                        required={true}
                        name={"email"}
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      className="border-none bg-slate h-32"
                      placeholder="Message"
                      required={true}
                      name={"message"}
                    />
                  </div>

                  <div>
                    <Button
                      className="w-full hover:text-white hover:bg-slate"
                    >
                      Send Now
                    </Button>
                  </div>
                </form>
              </>
            )
          }
        </div>

        <SubscribeCard />
      </div>
    </>
  );
};

export default Contact;
