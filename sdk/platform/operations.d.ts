export class Lead {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * Summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * Description:  Gets the list of company level tickets and/or ticket filters
       * @param { string } companyId - Company ID for which the data will be returned
       * @param { boolean } [items] - Decides that the reponse will contain the list of tickets
       * @param { boolean } [filters] - Decides that the reponse will contain the ticket filters
       
      **/
    getTickets(companyId?: string, items?: boolean, filters?: boolean): any;
    /**
      *
      * Summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
      * Description:  Gets the list of Application level Tickets and/or ticket filters
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for which the data will be returned
       * @param { boolean } [items] - Decides that the reponse will contain the list of tickets
       * @param { boolean } [filters] - Decides that the reponse will contain the ticket filters
       
      **/
    getTickets(companyId?: string, applicationId?: string, items?: boolean, filters?: boolean): any;
    /**
      *
      * Summary: Creates a company level ticket
      * Description:  Creates a company level ticket
       * @param { string } companyId - Company ID for which the data will be returned
       body: AddTicketPayload,
      **/
    createTicket(companyId: string, body: any): any;
    /**
      *
      * Summary: Retreives ticket details of a company level ticket with ticket ID
      * Description:  Retreives ticket details of a company level ticket
       * @param { string } companyId - Company ID for which the data will be returned
       * @param { string } ticketId - Tiket ID of the ticket to be fetched
       
      **/
    getTicket(companyId?: string, ticketId?: string): any;
    /**
      *
      * Summary: Retreives ticket details of a application level ticket
      * Description:  Retreives ticket details of a application level ticket with ticket ID
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for which the data will be returned
       * @param { string } ticketId - Tiket ID of the ticket to be fetched
       
      **/
    getTicket(companyId?: string, applicationId?: string, ticketId?: string): any;
    /**
      *
      * Summary: Edits ticket details of a company level ticket
      * Description:  Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
       * @param { string } companyId - Company ID for ticket
       * @param { string } ticketId - Ticket ID of ticket to be edited
       body: EditTicketPayload,
      **/
    editTicket(companyId: string, ticketId: string, body: any): any;
    /**
      *
      * Summary: Edits ticket details of a application level ticket
      * Description:  Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for ticket
       * @param { string } ticketId - Ticket ID of ticket to be edited
       body: EditTicketPayload,
      **/
    editTicket(companyId: string, applicationId: string, ticketId: string, body: any): any;
    /**
      *
      * Summary: Create history for specific company level ticket
      * Description:  Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
       * @param { string } companyId - Company ID for ticket
       * @param { string } ticketId - Ticket ID for which history is created
       body: TicketHistoryPayload,
      **/
    createHistory(companyId: string, ticketId: string, body: any): any;
    /**
      *
      * Summary: Create history for specific application level ticket
      * Description:  Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for ticket
       * @param { string } ticketId - Ticket ID for which history is created
       body: TicketHistoryPayload,
      **/
    createHistory(companyId: string, applicationId: string, ticketId: string, body: any): any;
    /**
      *
      * Summary: Gets history list for specific company level ticket
      * Description:  Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
       * @param { string } companyId - Company ID for ticket
       * @param { string } ticketId - Ticket ID for which history is to be fetched
       
      **/
    getTicketHistory(companyId?: string, ticketId?: string): any;
    /**
      *
      * Summary: Gets history list for specific application level ticket
      * Description:  Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
       * @param { string } companyId - Company ID of application
       * @param { string } applicationId - Application ID for ticket
       * @param { string } ticketId - Ticket ID for which history is to be fetched
       
      **/
    getTicketHistory(companyId?: string, applicationId?: string, ticketId?: string): any;
    /**
      *
      * Summary: Get specific custom form using it's slug
      * Description:  Get specific custom form using it's slug, this is used to view the form.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for the form
       * @param { string } slug - Slug of form whose response is getting submitted
       
      **/
    getCustomForm(companyId?: string, applicationId?: string, slug?: string): any;
    /**
      *
      * Summary: Edit the given custom form
      * Description:  Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for the form
       * @param { string } slug - Slug of form whose response is getting submitted
       body: EditCustomFormPayload,
      **/
    editCustomForm(companyId: string, applicationId: string, slug: string, body: any): any;
    /**
      *
      * Summary: Get list of custom form
      * Description:  Get list of custom form for given application
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for the form
       
      **/
    getCustomForms(companyId?: string, applicationId?: string): any;
    /**
      *
      * Summary: Creates a new custom form
      * Description:  Creates a new custom form for given application
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for the form
       body: CreateCustomFormPayload,
      **/
    createCustomForm(companyId: string, applicationId: string, body: any): any;
    /**
      *
      * Summary: Get Token to join a specific Video Room using it's unqiue name
      * Description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for video room
       * @param { string } uniqueName - Unique name of video room
       
      **/
    getTokenForVideoRoom(companyId?: string, applicationId?: string, uniqueName?: string): any;
    /**
      *
      * Summary: Get participants of a specific Video Room using it's unique name
      * Description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for video room
       * @param { string } uniqueName - Unique name of Video Room
       
      **/
    getVideoParticipants(companyId?: string, applicationId?: string, uniqueName?: string): any;
    /**
      *
      * Summary: Get video room id
      * Description:  Get video room id.
       * @param { string } companyId - Company ID of the application
       * @param { string } applicationId - Application ID for video room
       body: CreateVideoRoomPayload,
      **/
    createVideoRoom(companyId: string, applicationId: string, body: any): any;
}
