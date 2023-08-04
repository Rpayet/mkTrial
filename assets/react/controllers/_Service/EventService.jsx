import axios from "axios";
import { updateProgress } from "./Loading";
import { toggleSection } from "./SectionService";

export function EventService () {

  // Requête GET
  const getEvent = async (eventId, setEventData) => {
    try {
      const response = await axios.get(`/api/event/${eventId}`);
      setEventData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Requête POST
  const updateEvent = async (eventId, data, setErrors) => {
    try {  
      await axios.post(`/api/event/${eventId}/edit`, data);
      return false;
    } 
    catch (errors) {
      setErrors(errors.response.data);
      return true;
    }
  };

  // Requête DELETE
  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`/api/event/${eventId}/delete`);
      location = "/";
    } catch (error) {
      console.error("error");
    }
  };

  // Requête POST
  const postInterruption = async (eventId) => {
    try {
      await axios.post(`/api/event/${eventId}/interruption`);
    } catch (error) {
      console.error(error);
    }
  };

  // Requête POST
  const eventRegister = async (eventId, setErrors, setFilled) => {

    try {
      const startTime = performance.now();
      await axios.post(`/api/event/${eventId}/register`);
      const endTime = performance.now();
      const loadTime = endTime - startTime;

      updateProgress((loadTime/2), (progress) => {
          setFilled(progress);
      });

    } catch (error) {
      console.error(error);
      setErrors(error.response.data.errors);
    }
  };

  // Requête DELETE
  const eventUnregister = async (eventId, userId, setFilled) => {
    try {
      const startTime = performance.now();

      await axios.delete(`/api/event/${eventId}/unregister/${userId}`);

      const endTime = performance.now();
      const loadTime = endTime - startTime;
      updateProgress((loadTime/2), (progress) => {
        setFilled(progress);
      });

    }
    catch (error) {
      console.error(error);
    }
  };

  // Requête POST
  const postEntry = async (eventId, formData, setEventData, setToggleView, setErrors, setFilled, setNewEntry, user, entryInput ) => {
      try {
        const startTime = performance.now();
        
        await axios.post(`/api/event/${eventId}/addEntry`, formData)
                    .then((response) => {
                      const endTime = performance.now();
                      const loadTime = endTime - startTime;
                      updateProgress((loadTime/2), (progress) => {
                        setFilled(progress);
                      });
                      
                      setNewEntry({user: user.id, time: entryInput.time, isNew: true});
                      axios.get(`/api/event/${eventId}`)
                        .then((response) => {
                          setToggleView(false);
                          setEventData(response.data);
                          setFilled(0);
                        })
                        .catch((errors) => {
                          setErrors(errors.response.data);
                        });
                    })
                    .catch((errors) => {
                      setErrors(errors.response.data);
                    });
      } catch (error) {
        console.error(error);
    };
  };


  // Requête DELETE
  const deleteEntry = 
    async (entryId, setEventData, setFilled, 
      eventId, showUserEntries, setSection, setEntryDelete) => {
        try {
          const startTime = performance.now();
          await axios.delete(`/api/entry/${entryId}/delete`);
          const endTime = performance.now();
          const loadTime = endTime - startTime;

          updateProgress((loadTime/2), (progress) => {
              setFilled(progress);
          });

          const eventResponse = await axios.get(`/api/event/${eventId}`);
          setEventData(eventResponse.data);

          if (showUserEntries.length === 0) {
            setSection(toggleSection(section, "ranking"));
          }
          setFilled(0);
          setEntryDelete({id: null, visibility : false});

        } catch (error) {
          console.error(error);
        }
      };

  return {
    getEvent,
    updateEvent,
    deleteEvent,
    postInterruption,
    eventRegister,
    eventUnregister,
    postEntry,
    deleteEntry,
  };
};
