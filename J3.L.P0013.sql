USE [master]
GO
/****** Object:  Database [J3.L.P0013]    Script Date: 11/3/2019 11:56:36 PM ******/
CREATE DATABASE [J3.L.P0013]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'J3.L.P0013', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\J3.L.P0013.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'J3.L.P0013_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\J3.L.P0013_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [J3.L.P0013] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [J3.L.P0013].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [J3.L.P0013] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ARITHABORT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [J3.L.P0013] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [J3.L.P0013] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [J3.L.P0013] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [J3.L.P0013] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [J3.L.P0013] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [J3.L.P0013] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [J3.L.P0013] SET  DISABLE_BROKER 
GO
ALTER DATABASE [J3.L.P0013] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [J3.L.P0013] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [J3.L.P0013] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [J3.L.P0013] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [J3.L.P0013] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [J3.L.P0013] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [J3.L.P0013] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [J3.L.P0013] SET RECOVERY FULL 
GO
ALTER DATABASE [J3.L.P0013] SET  MULTI_USER 
GO
ALTER DATABASE [J3.L.P0013] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [J3.L.P0013] SET DB_CHAINING OFF 
GO
ALTER DATABASE [J3.L.P0013] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [J3.L.P0013] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [J3.L.P0013] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'J3.L.P0013', N'ON'
GO
USE [J3.L.P0013]
GO
/****** Object:  Table [dbo].[menu]    Script Date: 11/3/2019 11:56:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[menu](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_menu] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[menu_product]    Script Date: 11/3/2019 11:56:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[menu_product](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[product_id] [int] NULL,
	[menu_id] [int] NULL,
 CONSTRAINT [PK_menu_product] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[product]    Script Date: 11/3/2019 11:56:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](250) NULL,
	[price] [float] NULL,
 CONSTRAINT [PK_product] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[menu] ON 

INSERT [dbo].[menu] ([id], [name]) VALUES (1, N'Menu Vip')
INSERT [dbo].[menu] ([id], [name]) VALUES (2, N'Menu thuong')
INSERT [dbo].[menu] ([id], [name]) VALUES (3, N'Menu pho bien')
SET IDENTITY_INSERT [dbo].[menu] OFF
SET IDENTITY_INSERT [dbo].[menu_product] ON 

INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (1, 1, 1)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (2, 1, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (3, 1, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (4, 22, 1)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (5, 24, 1)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (6, 13, 1)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (7, 15, 1)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (8, 6, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (9, NULL, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (10, NULL, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (11, NULL, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (12, NULL, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (13, 5, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (14, NULL, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (15, NULL, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (16, NULL, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (17, NULL, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (18, NULL, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (19, 7, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (20, 5, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (21, 6, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (22, 6, 3)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (23, NULL, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (24, NULL, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (25, NULL, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (26, NULL, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (27, 5, 2)
INSERT [dbo].[menu_product] ([id], [product_id], [menu_id]) VALUES (28, 12, 2)
SET IDENTITY_INSERT [dbo].[menu_product] OFF
SET IDENTITY_INSERT [dbo].[product] ON 

INSERT [dbo].[product] ([id], [name], [price]) VALUES (1, N'Sushi 1', 2)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (2, N'Sushi 2', 25)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (3, N'Sushi 3', 30)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (4, N'Sushi 4', 56)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (5, N'Sushi 5', 43)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (6, N'Sushi 6', 546)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (7, N'Sushi 7', 234)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (8, N'Sushi 8', 456)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (9, N'Sushi 9', 3)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (10, N'Sushi 10', 34)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (11, N'Sushi 11', 234)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (12, N'Sushi 12', 345)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (13, N'Sushi 13', 32)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (14, N'Sushi 14', 32)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (15, N'Sushi 15', 32)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (16, N'Sushi 16', 23)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (17, N'Sushi 17', 435)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (18, N'Sushi 18', 56)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (19, N'Sushi 19', 5)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (20, N'Sushi 20', 45)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (21, N'Sushi 21', 456)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (22, N'Sushi 22', 456)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (23, N'Sushi 23', 437)
INSERT [dbo].[product] ([id], [name], [price]) VALUES (24, N'Sushi 24', 44)
SET IDENTITY_INSERT [dbo].[product] OFF
USE [master]
GO
ALTER DATABASE [J3.L.P0013] SET  READ_WRITE 
GO
