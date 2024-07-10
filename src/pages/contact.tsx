import ContainerTitle from "@/components/Common/ContainerTitle.tsx";
import SEO from "@/components/SEO.tsx";
import EmailButton from "@/components/Common/EmailButton.tsx";
import CallButton from "@/components/Common/CallButton.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";

const Contact = () => {

  const submitForm = (e: any) => {
    e.preventDefault();
    const values = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }
    console.log("Form Submitted", values);
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
          <CallButton/>
          <EmailButton/>
        </div>
        <div>
          <h3>
            Send a message
          </h3>
          <form
            className="space-y-4"
            onSubmit={submitForm}
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
                className="w-full"
              >
                Send Now
              </Button>
            </div>
          </form>
        </div>

        <div
          className={"hidden"}
        >
          Subscribe to Newsletter
        </div>
      </div>
    </>
  );
};

export default Contact;
